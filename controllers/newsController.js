const express = require('express');
const router = express.Router();
const newsModel = require('../models/newsModel');

//routes
/**
 * @swagger
 * components:
 *  schemas:
 *      news:
 *          type: object
 *          properties:
 *              title:
 *                  type: String
 *                  description: Titulo de la noticia
 *              url:
 *                  type: String
 *                  description: Link de la noticias a desplegar
 *              source:
 *                  type: String
 *                  description: Portal web o periodico del que fue extraída la noticia
 *              newsCategory:
 *                  type: ObjectId
 *                  description: Categoria a la que aplica la noticia {1...*}
 *              status:
 *                  type: Boolean
 *                  description: Estado de la noticia
 *          required:
 *              - title
 *              - url
 *              - source
 *              - newCategory
 *          example:
 *              title: Donald Trump candidato a la presidencia de EEUU
 *              url: http://linkgenericodeportalweb.com
 *              source: portalweb/periodicogenerico Ejemplo: NewYorkTimes
 *              newCategory: Politica/País
 *              status: TRUE
 * 
 */
/**
 * @swagger
 * /news/createNews:
 *  post:
 *      summary: Crea una nueva noticia
 *      tags: [news]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/news'
 *      responses:
 *          201:
 *              description: Noticia creada
 *          404:
 *              description: Fatal error database
 *                  
 * 
 */
router.post('/createNews', newsModel.createNews);

/**
 * @swagger
 * /news/getNews:
 *  post:
 *      summary: Trae una noticia por _id
 *      tags: [news]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/news'
 *      responses:
 *          200:
 *              description: Noticia encontrada
 *          500:
 *              description: Noticia no encontrada
 *                  
 * 
 */
router.post('/getNews', newsModel.getNews);

/**
 * @swagger
 * /news/updateNews/:id:
 *  put:
 *      summary: Actualiza una noticia según su id
 *      tags: [news]
 *      requestBody:
 *          required: true
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/News'
 *      responses:
 *          200:
 *              description: La noticia fue actualizada
 *          404:
 *              description: Error en base de datos, no actualizada
 *                  
 * 
 */
router.put('/updateNews/:id', newsModel.updateNews);

/**
 * @swagger
 * /news/deleteNews/:id:
 *  put:
 *      summary: Actualiza status false según id de Noticia
 *      tags: [news]
 *      requestBody:
 *          required: false
 *      responses:
 *          200:
 *              description: News status actualizado
 *          404:
 *              description: Error interno, no se puede eliminar
 *                  
 * 
 */
router.put('/deleteNews/:id', newsModel.deleteNews);

module.exports = router;