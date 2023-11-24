const express = require('express');
const router = express.Router();
const UserType = require('../models/userType');
const UserTypeDTO = require('../dtos/userTypeDTO');

//routes
app.post('/createUserType', userTypeModel.createUserType);
app.post('/getUserType', userTypeModel.getUserType);
app.put('/updateUserType/:id', userTypeModel.updateUserType);
app.put('/deleteUserType/:id', userTypeModel.deleteUserType)

module.exports = router;