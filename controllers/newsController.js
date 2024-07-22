const express = require('express');
const router = express.Router();
const newsModel = require('../models/newsModel');

/**
 * @swagger
 * components:
 *  schemas:
 *      News:
 *          type: object
 *          properties:
 *              title:
 *                  type: String
 *                  description: Titular de la noticia
 *              url:
 *                  type: String
 *                  description: URL
 *              source:
 *                  type: String
 *                  description: Fuente de la que fue recolectada
 *              newsCategory:
 *                  type: ObjectId
 *                  description: ObjectId de elemento en colección "categories"
 *              status:
 *                  type: Boolean
 *                  description: Estado actual
 *          required:
 *              - title
 *              - url
 *              - source
 *          example:
 *              title: "Donald Trump candidato a la presidencia de EEUU"
 *              url: "http://linkgenericodeportalweb.com"
 *              source: "NewYorkTimes"
 *              newsCategory: "669ed70bf50a58982909440d"
 * 
 */

/**
 * @swagger
 * /news/createNews:
 *  post:
 *      summary: Crea una nueva noticia
 *      tags: [News]
 *      security:
 *          - ApiKeyAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/News'
 *      responses:
 *          201:
 *              description: Noticia creada
 *          400:
 *              description: Datos faltantes
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.post('/createNews', newsModel.createNews);

/**
 * @swagger
 * /news/getNews:
 *  post:
 *      summary: Obtiene una nueva noticia
 *      tags: [News]
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
 *                      _id: "669ee47196ffa8c34b13af1f"
 *      responses:
 *          200:
 *              description: Noticia encontrada
 *          500:
 *              description: Error en la busqueda
 *                  
 * 
 */
router.post('/getNews', newsModel.getNews);

/**
 * @swagger
 * /news/updateNews/{id}:
 *  put:
 *      summary: Actualiza una noticia
 *      tags: [News]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669ee47196ffa8c34b13af1f"
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/News'
 *      responses:
 *          200:
 *              description: Noticia actualizado
 *          400:
 *              description: Error en la busqueda de noticia a actualizar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/updateNews/:id', newsModel.updateNews);

/**
 * @swagger
 * /news/deleteNews/{id}:
 *  put:
 *      summary: Actualiza el estado de una noticia a falso
 *      tags: [News]
 *      security:
 *          - ApiKeyAuth: []
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            example: "669ee47196ffa8c34b13af1f"
 *      responses:
 *          200:
 *              description: Noticia actualizado
 *          400:
 *              description: Error en la busqueda de noticia a actualizar
 *          500:
 *              description: Error en el servidor
 *                  
 * 
 */
router.put('/deleteNews/:id', newsModel.deleteNews);

module.exports = router;