const express = require('express');
const router = express.Router();
const UserType = require('../models/user');

//routes
app.post('/user', userModel.createUser);
app.post('/user', userModel.getUser);
app.put('/user/:id', userModel.updateUserType);
app.put('/deleteUser/:id', userModel.deleteUser)

module.exports = router;