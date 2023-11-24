const User = require('../dtos/userDTO');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; // Número de rondas de sal. Cuanto mayor, más seguro, pero más lento.

async function createUser(req, res) {
    try{
        // Espera a que se complete la verificación del token
        await verifyToken(req, res);
        // Generar un hash de la contraseña antes de almacenarla
        bcrypt.hash(req.body.pss, saltRounds, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: `Fatal error: ${err}`
                });
            }
            const user = new User({
                discordUserName: req.body.discordUserName,
                password: hashedPassword,
                userType: require.body.userType,
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

async function getUser(req, res) {
    try {
        const user = await User.findOne({_id: req.body.id});
        res.status(200).json({  user });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: `Server error: ${error}`,
            code: 0
        });
    }
}

async function updateUser(req, res) {
    const userId = req.params.id;

    bcrypt.hash(req.body.password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({
                result: false,
                message: `Fatal error: ${err}`
            });
        }
    });

    const updatedData = {
        discordUserName: req.body.discordUserName,
        password: hashedPassword,
        userType: req.body.userType,
    };

    try {
        const result = await User.findOneAndUpdate({ _id: userId }, { $set: updatedData });
        console.log(result);

        if (result) {
            res.status(200).json({
                result: true,
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

async function deleteUser(req, res) {
    const userId = req.params.id;
    
    const updatedData = {
        status: false
    };

    try {
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
    updateUser,
    deleteUser
}