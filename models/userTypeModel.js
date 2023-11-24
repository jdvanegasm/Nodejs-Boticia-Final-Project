const express = require('express');
const router = express.Router();
const userType = require('../dtos/userTypeDTO');

async function createUserType(req, res){
    try{
        const { nickName, interestCategory, status } = req.body;
        const newUserTypeDTO = new UserTypeDTO(nickName, interestCategory, status);
        const newUserType = new UserType(newUserTypeDTO);
        const result = await newUserType.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserType(req, res){
    try{
        const userTypes = await userTypes.findOne({_id: req.body._id});
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
        const result = await userType.findOneAndUpdate({ _id: userTypeId}, { $set: updatedData });
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
        res.status(500).json({
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
        const result = await userType.findOneAndUpdate({ _id: userTypeId}, { $set: deleteData });
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
            message: 'An error has been ocurred while the user was modified',
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