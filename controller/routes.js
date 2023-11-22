const express = require('express');
const app = express();

app.use( '/category', require('./category') );
app.use( '/news', require('./news') );
app.use( '/user', require('./user') );
app.use( '/userType', require('./userType') );

module.exports = app;