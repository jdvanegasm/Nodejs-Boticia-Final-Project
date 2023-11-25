const express = require('express');
const router = express.Router();
const userTypeModel = require('../models/userTypeModel');

//routes
/**
 * @swagger
 * components:
 *  schemas:
 *      UserType:
 *          type: object
 *          properties:
 *              nickName:
 *                  type: String
 *                  description: Nombre del UserType
 *              interestCategory:
 *                  type: [objectId]
 *                  description: Categorias de interes del userType
 *              status:
 *                  type: Boolean
 *                  description: Estado del UserType
 *          required:
 *              - nickName
 *          example:
 *              nickName: Estoico
 *              interestCategory: Array (empty)
 * 
 * 
 */

/**
 * @swagger
 * /userType/createUserType:
 *  post:
 *      summary: Crea un nuevo userType
 *      tags: [UserType]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/UserType'
 *      responses:
 *          201:
 *              description: UserType creado
 *          404:
 *              description: Fatal error database
 *                  
 * 
 */
router.post('/createUserType', userTypeModel.createUserType);

/**
 * @swagger
 * /userType/getUserType:
 *  post:
 *      summary: Trae un userType según su id
 *      tags: [UserType]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/UserType'
 *      responses:
 *          200:
 *              description: UserType encontrado
 *          500:
 *              description: UserType no encontrado
 *                  
 * 
 */
router.post('/getUserType', userTypeModel.getUserType);

/**
 * @swagger
 * /userType/updateUserType/:id:
 *  put:
 *      summary: Actualiza un userType según su id
 *      tags: [UserType]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/UserType'
 *      responses:
 *          200:
 *              description: UserType actualizado
 *          404:
 *              description: Error interno no fue posible actualizar
 *                  
 * 
 */
router.put('/updateUserType/:id', userTypeModel.updateUserType);

/**
 * @swagger
 * /userType/deleteUserType/:id:
 *  put:
 *      summary: Actualiza status como false a un userType según su id
 *      tags: [UserType]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/UserType'
 *      responses:
 *          200:
 *              description: UserType eliminado
 *          404:
 *              description: Error interno no fue posible actualizar
 *                  
 * 
 */
router.put('/deleteUserType/:id', userTypeModel.deleteUserType);

module.exports = router;