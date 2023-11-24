const express = require('express');
const router = express.Router();
const UserType = require('../models/userType');
const UserTypeDTO = require('../dtos/userTypeDTO');

//routes
app.post('/userType', userTypeModel.createUserType);
app.post('/userType', userTypeModel.getUserType);
app.put('/userType/:id', userTypeModel.updateUserType);
app.put('/deleteUserType/:id', userTypeModel.deleteUserType)

module.exports = router;