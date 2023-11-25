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
 *                  description: Nombre de la categoria
 *              status:
 *                  type: Boolean
 *                  description: Estado de la Categoria
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
 *      summary: Crea una nueva Category
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Category'
 *      responses:
 *          201:
 *              description: Category creada
 *          404:
 *              description: Fatal error database
 *                  
 * 
 */
router.post('/createCategory', categoryModel.createCategory);

/**
 * @swagger
 * /category/getCategory:
 *  post:
 *      summary: Trae una Category según su id
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: Category encontrada
 *          500:
 *              description: Category no encontrada
 *                  
 * 
 */
router.post('/getCategory', categoryModel.getCategory);

/**
 * @swagger
 * /category/updateCategory/:id:
 *  put:
 *      summary: Actualiza una Category según su id
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: Category actualizada
 *          404:
 *              description: Error interno no fue posible actualizar
 *                  
 * 
 */
router.put('/updateCategory/:id', categoryModel.updateCategory);

/**
 * @swagger
 * /category/deleteCategory/:id:
 *  put:
 *      summary: Actualiza status false una Category según su id
 *      tags: [Category]
 *      requestBody:
 *          required: false
 *      responses:
 *          200:
 *              description: Category eliminada
 *          404:
 *              description: Error interno no fue posible actualizar
 *                  
 * 
 */
router.put('/deleteCategory/:id', categoryModel.deleteCategory);

module.exports = router;