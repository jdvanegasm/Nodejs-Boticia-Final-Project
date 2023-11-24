const express = require('express');
const router = express.Router();
const newsModel = require('../models/newsModel');
const app = express();

//routes
app.post('/createNews', newsModel.createNews);
app.post('/getNews', newsModel.getNews);
app.put('/updateNews/:id', newsModel.updateNews);
app.put('/deleteNews/:id', newsModel.deleteNews);

module.exports = router;