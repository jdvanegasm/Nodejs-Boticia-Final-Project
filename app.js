const bodyParser = require('body-parser'); //La constante de la funcion parser
const mongoose = require('mongoose'); //Requiere mongoose para conectarse a la base de dato
const express = require('express'); //La constante express importa la libreria por medio del require
const app = express(); //La constante app settea el plugin de conexion express
const port = 3000; //Puerto en el que se ejecuta el servidor

// Rutas - Ejemplos (End points iniciales)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Controladores para las colecciones 'user' y 'userType'
app.use(require('./controllers/userController'));
app.use(require('./controllers/userTypeController'));

//Funcion que conecta a la DB usando la URL del sevidor de mongoose
mongoose.connect('mongodb+srv://JDVM:EY85oVuSZkVjYxhk@cluster0.p2ovi4c.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('mongodb connection up'))
    .catch(error => console.log(`unable to connect to mongodb: ${error.message}`));

//Iniciar servidor
app.listen(port,()=>{ 
    //Action listener para cuando el puerto retorne la conexión con el servidor localhost
    console.log(`Servidor en ejecucion en http://localhost:${port}`); 
    //Impresion en pantalla con el link standar del localhost junto con el puerto 
})
app.use(require('./controllers/routes'));