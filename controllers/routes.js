const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar controladores
const userController = require('./controllers/userController');
const userTypeController = require('./controllers/userTypeController');

// Rutas para usuarios
app.post('/userTypeCreateUser', userController.createUser);
app.post('/userTypeGetUser', userController.getUser);

module.exports = app;