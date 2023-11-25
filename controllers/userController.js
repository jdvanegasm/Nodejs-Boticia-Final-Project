const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

//routes
router.post('/createUser', userModel.createUser);
router.post('/getUser', userModel.getUser);
router.get('/getUser/:discordUserName', userModel.getUserByName);
router.put('/updateUser/:id', userModel.updateUser);
router.put('/deleteUser/:id', userModel.deleteUser);
router.post('/login', userModel.login);

module.exports = router;