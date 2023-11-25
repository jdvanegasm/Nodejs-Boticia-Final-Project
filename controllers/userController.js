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
 *              - name
 *              - email
 *              - pss
 *          example:
 *              discorUsername: __nous
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
router.post('/getUser', userModel.getUser);
router.get('/getUser/:discordId', userModel.getUserByDiscordId);
router.put('/updateUser/:id', userModel.updateUser);
router.put('/deleteUser/:id', userModel.deleteUser);
router.post('/login', userModel.login);

module.exports = router;