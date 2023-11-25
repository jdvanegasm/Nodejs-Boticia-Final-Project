const User = require('../dtos/userDTO');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; // Número de rondas de sal. Cuanto mayor, más seguro, pero más lento.

async function createUser(req, res) {
    try{
        // Espera a que se complete la verificación del token

        await verifyToken(req, res);

        // Generar un hash de la contraseña antes de almacenarla
        bcrypt.hash(req.body.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: `Fatal error: ${err}`
                });
            }
            const user = new User({
                discordUserName: req.body.discordUserName,
                password: hashedPassword,
                userType: req.body.userType,
            });
            user.save()
            .then(result => {
                res.status(201).json({
                    error: false,
                    message: 'The user has been created',
                    data: result
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: true,
                    message: `Fatal error: ${error}`
                });
            });
        });
    }catch (error) {
        res.status(500).json({
            error: true,
            message: `Fatal Error: ${error}`,
            code: 0
        });
    }
}

async function login(req, res) {
    const { discordUserName, password } = req.body;

    try {
        // Buscar el usuario por discordusername y estado activo
        const user = await User.findOne({ discordUserName, status: true });

        // Verificar si el usuario existe y la contraseña es válida
        if (user && await bcrypt.compare(password, user.password)) {
            

            // Generar un token con el ID del usuario y la clave de sesión
            const token = generateToken(user._id);

            res.status(200).json({
                error: false,
                message: 'Inicio de sesión exitoso',
                token
            });
        } else {
            res.status(401).json({
                error: true,
                message: 'DiscordUsername o contraseña incorrectos'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: true,
            message: `Error en el servidor: ${error}`,
            code: 0
        });
    }
}

function generateToken(userId) {
    // Incluye la clave de sesión como parte de la información del token
    const payload = { userId };
    
    // Firma el token utilizando la clave secreta del servidor y la clave de sesión única
    const token = jwt.sign(payload, process.env.SERVER_SECRET_KEY,{ expiresIn : '3h' });
    
    return token;
}

async function verifyToken(req, res) {
    // Obtener el token del encabezado 'Authorization'
    const token = req.headers.authorization;
    
    // Verificar si el token está presente
    if (!token) {
        throw new Error('Acces token has not given');
    }

    // Utiliza la promesa devuelta por jwt.verify para manejar la asincronía
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SERVER_SECRET_KEY, (err, decoded) => {
            if (err) {
                reject(new Error('Invalid access token. Try to login later.'));
            }
            // Añade la información del usuario decodificado al objeto de solicitud (req)
            req.user = decoded;
            resolve(); // Resuelve la promesa si la verificación del token es exitosa
        });
    });
}

async function getUser(req, res) {
    try {
        await verifyToken(req, res);
        const user = await User.findOne({_id: req.body._id});
        res.status(200).json({  user });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: `Server error: ${error}`,
            code: 0
        });
    }
}

async function getUserByName(req, res) {
    try {
        const usuarios = await Usuario.findOne({discordUserName: req.params.discordUserName});
        res.status(200).json({  usuarios });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: `Server error: ${error}`,
            code: 0
        });
    }
}

async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        await verifyToken(req, res);
        if(req.body.password){
            bcrypt.hash(req.body.password, saltRounds, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({
                        result: false,
                        message: `Fatal error: ${err}`
                    });
                }
                

                const updatedData = {
                    discordUserName: req.body.discordUserName,
                    password: hashedPassword,
                    userType: req.body.userType,
                };
                User.findOneAndUpdate({ _id: userId }, { $set: updatedData }).then(result => {
                    res.status(200).json({
                        error: false,
                        message: 'The user has been updated',
                        data: result
                    });
                })
                .catch(error => {
                    res.status(404).json({
                        error: true,
                        message: `Fatal error: ${error}`
                    });
                });
            });
        }else{
            const updatedData = {
                discordUserName: req.body.discordUserName,
                userType: req.body.userType,
            };
            User.findOneAndUpdate({ _id: userId }, { $set: updatedData }).then(result => {
                res.status(200).json({
                    error: false,
                    message: 'The user has been updated',
                    data: result
                });
            })
            .catch(error => {
                res.status(404).json({
                    error: true,
                    message: `Fatal error: ${error}`
                });
            });
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: 'Fatal error',
            error: error
        });
    }
}

async function deleteUser(req, res) {
    const userId = req.params.id;
    
    const updatedData = {
        status: false
    };

    try {
        await verifyToken(req, res);
        const result = await User.findOneAndUpdate({ _id: userId }, { $set: updatedData });
        console.log(result);

        if (result) {
            res.status(200).json({
                resultado: true,
                message: 'The user has been modified'
            });
        } else {
            res.status(404).json({
                result: false,
                message: 'Id doesnt match, try again later'
            });
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: 'Fatal error',
            error: error
        });
    }
}

module.exports = {
    createUser,
    getUser,
    getUserByName,
    updateUser,
    deleteUser,
    login,
    verifyToken
}