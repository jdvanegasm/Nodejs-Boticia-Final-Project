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
 *                  description: Id en discord
 *              password:
 *                  type: String
 *                  description: Contraseña
 *              userType:
 *                  type: ObjectId
 *                  description: Tipo de usuario referenciando a la collection de UserTypes
 *              status:
 *                  type: Boolean
 *                  description: Estado del usuario
 *          required:
 *              - discordUserName
 *              - discordId
 *              - password
 *          example:
 *              discordUserName: "cr__t_"
 *              discordId: "22220001"
 *              password: "adminadmin"
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
 *      security:
 *          - ApiKeyAuth: []
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
 *          400:
 *              description: Error en la inserción
 *          500:
 *              description: Error en el servidor
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
 *      security:
 *          - ApiKeyAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: String
 *                          description: Id del objeto
 *                  example:               
 *                      _id: "669ec4ad0b8ef93fa9303986"
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *          400:
 *              description: Error en la busqueda
 *                  
 * 
 */
router.post('/getUser', userModel.getUser);

/**
 * @swagger
 * /user/getUser/{discordId}:
 *  get:
 *      summary: Trae un usuario según su discordId
 *      tags: [User]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: discordId
 *            in: path
 *            required: true
 *            example: "22220001"
 *            
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *          400:
 *              description: Error en la busqueda
 *                  
 * 
 */
router.get('/getUser/:discordId', userModel.getUserByDiscordId);

/**
 * @swagger
 * /user/updateUser/{id}:
 *  put:
 *      summary: Actualiza un usuario según su id
 *      tags: [User]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669ec4ad0b8ef93fa9303986"
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Usuario actualizado
 *          400:
 *              description: Error en la busqueda de usuario a actualizar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/updateUser/:id', userModel.updateUser);

/**
 * @swagger
 * /user/deleteUser/{id}:
 *  put:
 *      summary: Actualiza status false según id de User
 *      tags: [User]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669ec4ad0b8ef93fa9303986"
 *      responses:
 *          200:
 *              description: Estado actualizado a falso
 *          400:
 *              description: Error en la busqueda de usuario a eliminar
 *          500:
 *              description: Error en el servidor
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
 *                  properties:
 *                      discordId:
 *                          type: String
 *                          description: Id del usuario en discord
 *                      password:
 *                          type: String
 *                          description: Contraseña
 *                  example:               
 *                      discordId: "22220001"
 *                      password: "adminadmin"
 *      responses:
 *          200:
 *              description: Usuario logeado
 *          401:
 *              description: Usuario o contraseña no coinciden
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.post('/login', userModel.login);

module.exports = router;