const UserType = require('../dtos/userTypeDTO');
const userModel = require('./userModel')

async function createUserType(req, res){
    try{
        await userModel.verifyToken(req,res);
        const userType = new UserType({
            nickName: req.body.nickName,
            interestCategory: req.body.interestCategory
        });
        userType.save()
        .then((result) => {
            res.status(201).json({
            error: false,
            message: "The UserType has been created",
            data: result,
            });
        }).catch((error) => {
            res.status(404).json({
                error: true,
                message: `Server error: ${error}`,
            });
        });
    }catch(error){
        res.status(500).json({
            error: true,
            message: `Fatal Error: ${error}`,
            code: 0
        });
    }
}

async function getUserType(req, res){
    try{
        await userModel.verifyToken(req,res);
        const userTypes = await UserType.findOne({_id: req.body._id});
        res.status(200).json({userTypes});
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function updateUserType(req, res){
    const userTypeId = req.params.id;

    const updatedData = {
        nickName: req.body.nickName,
        interestCategory: req.body.interestCategory
    };

    try{
        await userModel.verifyToken(req,res);
        const result = await UserType.findOneAndUpdate({ _id: userTypeId}, { $set: updatedData });
        console.log(result);
        if (result) {
            res.status(200).json({
                result: true,
                message: 'The user has been modified'
            });
        } else {
            res.status(404).json({
                result: false,
                message: 'fatal error'
            });
        }
    } catch(error){
        res.status(404).json({
            result: false,
            message: 'An error has been ocurred while the user was modified',
            error: error
        })
    }
}

async function deleteUserType(req, res){
    const userTypeId = req.params.id;

    const deleteData = {
        status: false
    }

    try{
        await userModel.verifyToken(req,res);
        const result = await UserType.findOneAndUpdate({ _id: userTypeId}, { $set: deleteData });
        console.log(result);
        if (result) {
            res.status(200).json({
                result: true,
                message: 'The user has been deleted'
            });
        } else {
            res.status(404).json({
                result: false,
                message: 'fatal error'
            });
        }
    } catch(error){
        res.status(500).json({
            result: false,
            message: 'An error has been ocurred while the user was deleted',
            error: error 
        });
    }
}

module.exports={
    createUserType,
    getUserType,
    updateUserType,
    deleteUserType
}