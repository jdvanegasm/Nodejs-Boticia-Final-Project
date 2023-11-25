const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

//routes
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              discordUserName:
 *                  type: String
 *                  description: Nombre de usuario de discord
 *              discordId:
 *                  type: String
 *                  description: Id en discord del usuario
 *              password:
 *                  type: String
 *                  description: Contraseña del usuario
 *              userType:
 *                  type: ObjectId
 *                  description: Tipo de usuario del usuario
 *              status:
 *                  type: Boolean
 *                  description: Estado del usuario
 *          required:
 *              - discordUserName
 *              - password
 *          example:
 *              discorUserName: __nous
 *              email: 610207942326878210
 *              password: 12345
 *              userType: 656195c060ab4b406856c978
 *              status: true
 * 
 */

/**
 * @swagger
 * /user/createUser:
 *  post:
 *      summary: Crea un nuevo user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: User creado
 *          404:
 *              description: Fatal error database
 *                  
 * 
 */
router.post('/createUser', userModel.createUser);

/**
 * @swagger
 * /user/getUser:
 *  post:
 *      summary: Trae un usuario según su id
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User encontrado
 *          500:
 *              description: User no encontrado
 *                  
 * 
 */
router.post('/getUser', userModel.getUser);

/**
 * @swagger
 * /user/getUser/:discordId:
 *  get:
 *      summary: Trae un usuario según su discordId
 *      tags: [User]
 *      requestBody:
 *          required: false
 *      responses:
 *          200:
 *              description: User encontrado
 *          500:
 *              description: User no encontrado
 *                  
 * 
 */
router.get('/getUser/:discordId', userModel.getUserByDiscordId);

/**
 * @swagger
 * /user/updateUser/:id:
 *  put:
 *      summary: Actualiza un usuario según su id
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User actualizado
 *          404:
 *              description: Error en base de datos, no actualizado
 *                  
 * 
 */
router.put('/updateUser/:id', userModel.updateUser);

/**
 * @swagger
 * /user/deleteUser/:id:
 *  put:
 *      summary: Actualiza status false según id de User
 *      tags: [User]
 *      requestBody:
 *          required: false
 *      responses:
 *          200:
 *              description: User status actualizado
 *          404:
 *              description: Error interno, no se puede eliminar
 *                  
 * 
 */
router.put('/deleteUser/:id', userModel.deleteUser);

/**
 * @swagger
 * /user/login:
 *  post:
 *      summary: Logea un usuario
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User logeado
 *          401:
 *              description: Error no se pudo logear
 *                  
 * 
 */
router.post('/login', userModel.login);

module.exports = router;