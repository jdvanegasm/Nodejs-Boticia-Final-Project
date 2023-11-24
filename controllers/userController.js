const express = require('express');
const router = express.Router();
const UserType = require('../models/user');

//routes
app.post('/createUser', userModel.createUser);
app.post('/getUser', userModel.getUser);
app.put('/updateUser/:id', userModel.updateUser);
app.put('/deleteUser/:id', userModel.deleteUser)

module.exports = router;