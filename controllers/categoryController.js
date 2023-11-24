const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categoryModel');
const app = express();

//routes
app.post('/createCategory', categoryModel.createCategory);
app.post('/getCategory', categoryModel.getCategory);
app.put('/updateCategory/:id', categoryModel.updateCategory);
app.put('/deleteCategory/:id', categoryModel.deleteCategory);

module.exports = router;