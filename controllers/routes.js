const express = require('express');
const app = express();

app.use('/userTypeController', require('./userTypeController'));
app.use('/userController', require('./userController'));
app.use('/newsController', require('./newsController'));
app.use('/categoryController', require('./categoryController'));

module.exports = app;