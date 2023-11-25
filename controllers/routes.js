const express = require('express');
const app = express();

app.use('/userType', require('./userTypeController'));
app.use('/user', require('./userController'));
app.use('/news', require('./newsController'));
app.use('/category', require('./categoryController'));

module.exports = app;