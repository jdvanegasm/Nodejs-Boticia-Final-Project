const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categoryModel');

//routes
router.post('/createCategory', categoryModel.createCategory);
router.post('/getCategory', categoryModel.getCategory);
router.put('/updateCategory/:id', categoryModel.updateCategory);
router.put('/deleteCategory/:id', categoryModel.deleteCategory);

module.exports = router;