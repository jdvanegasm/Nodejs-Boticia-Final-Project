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
 *              name:
 *                  type: String
 *                  description: Nombre de reconocimiento
 *              interestCategory:
 *                  type: [objectId]
 *                  description: Lista de categorias de interes
 *              status:
 *                  type: Boolean
 *                  description: Estado actual
 *          required:
 *              - name
 *          example:
 *              name: "Estoico"
 * 
 * 
 */

/**
 * @swagger
 * /userType/createUserType:
 *  post:
 *      summary: Crea un nuevo userType
 *      tags: [UserType]
 *      security:
 *          - ApiKeyAuth: []
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
 *          500:
 *              description: Error en la inserción
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
 *                      _id: "669edf37fc81a636d97efdf5"
 *      responses:
 *          200:
 *              description: UserType encontrado
 *          500:
 *              description: Error en la busqueda
 *                  
 * 
 */
router.post('/getUserType', userTypeModel.getUserType);

/**
 * @swagger
 * /userType/updateUserType/{id}:
 *  put:
 *      summary: Actualiza un userType según su id
 *      tags: [UserType]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669edf37fc81a636d97efdf5"
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
 *          400:
 *              description: Error en la busqueda de tipo a actualizar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/updateUserType/:id', userTypeModel.updateUserType);

/**
 * @swagger
 * /userType/deleteUserType/{id}:
 *  put:
 *      summary: Actualiza status como false a un userType según su id
 *      tags: [UserType]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669edf37fc81a636d97efdf5"
 *      responses:
 *          200:
 *              description: UserType eliminado
 *          400:
 *              description: Error en la busqueda de tipo a eliminar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/deleteUserType/:id', userTypeModel.deleteUserType);

module.exports = router;