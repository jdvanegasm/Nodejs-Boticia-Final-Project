const express = require('express');
const app = express();

app.use('/userTypeController', require('./userTypeController'));
app.use('/userController', require('./userController'));
app.use('/newsController', required('./newsController'));
app.use('/categoryController', required('./categoryController'));

module.exports = app;