const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

//routes
router.post('/createUser', userModel.createUser);
router.post('/getUser', userModel.getUser);
router.put('/updateUser/:id', userModel.updateUser);
router.put('/deleteUser/:id', userModel.deleteUser)

module.exports = router;