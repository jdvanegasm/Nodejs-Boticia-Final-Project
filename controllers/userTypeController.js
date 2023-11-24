const express = require('express');
const router = express.Router();
const userTypeModel = require('../models/userTypeModel');

//routes
router.post('/createUserType', userTypeModel.createUserType);
router.post('/getUserType', userTypeModel.getUserType);
router.put('/updateUserType/:id', userTypeModel.updateUserType);
router.put('/deleteUserType/:id', userTypeModel.deleteUserType)

module.exports = router;