const express = require('express');
const router = express.Router();
const newsModel = require('../models/newsModel');

//routes
/*
router.post('/createNews', newsModel.createNews);
router.post('/getNews', newsModel.getNews);
router.put('/updateNews/:id', newsModel.updateNews);
router.put('/deleteNews/:id', newsModel.deleteNews);
*/
module.exports = router;