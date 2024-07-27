const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categoryModel');
/**
 * @swagger
 * components:
 *  schemas:
 *      Category:
 *          type: object
 *          properties:
 *              categoryName:
 *                  type: String
 *                  description: Nombre
 *              status:
 *                  type: Boolean
 *                  description: Estado actual
 *          required:
 *              - categoryName
 *          example:
 *              categoryName: Politica
 * 
 */

//routes

/**
 * @swagger
 * /category/createCategory:
 *  post:
 *      summary: Crea una nueva categoría de noticia
 *      tags: [Category]
 *      security:
 *          - ApiKeyAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: Categoría creada
 *          400:
 *              description: Datos faltantes
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.post('/createCategory', categoryModel.createCategory);

/**
 * @swagger
 * /category/getCategory:
 *  post:
 *      summary: Trae una categoría de noticia según su id
 *      tags: [Category]
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
 *                      _id: "669ed70bf50a58982909440d"
 *      responses:
 *          200:
 *              description: Categoría encontrada
 *          500:
 *              description: Error en la busqueda
 *                  
 * 
 */
router.post('/getCategory', categoryModel.getCategory);

/**
 * @swagger
 * /category/updateCategory/{id}:
 *  put:
 *      summary: Actualiza una categoría de noticia según su id
 *      tags: [Category]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669ed70bf50a58982909440d"
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: Categoría actualizado
 *          400:
 *              description: Error en la busqueda de categoría a actualizar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/updateCategory/:id', categoryModel.updateCategory);

/**
 * @swagger
 * /category/deleteCategory/{id}:
 *  put:
 *      summary: Actualiza status false una categoría de noticia según su id
 *      tags: [Category]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669ed70bf50a58982909440d"
 *      responses:
 *          200:
 *              description: Estado de categoría actualizado a falso
 *          400:
 *              description: Error en la busqueda de categoría a eliminar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/deleteCategory/:id', categoryModel.deleteCategory);

module.exports = router;