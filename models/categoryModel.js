
const express = require('express');
const router = express.Router();
const Category = require('../dtos/categoryDTO');

async function createCategory(req, res){
    try{
        const { name } = req.body;
        const newCategoryDTO = new categoryDTO (name);
        const newCategory = new Category(newCategoryDTO);
        const result = await newCategory.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getCategory(req, res){
    try{
        const category = await Category.findOne({_id: req.body._id});
        res.status(200).json({news});
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function updateCategory (req, res){
    const categoryId = req.params.id;

    const updatedData = {
        categoryName: req.body.categoryName
    };

    try{
        const result = await Cateogry.findOneAndUpdate({ _id: newsId}, { $set: updatedData });
        console.log(result);
        if (result) {
            res.status(200).json({
                result: true,
                message: 'The news category has been modified'
            });
        } else {
            res.status(404).json({
                result: false,
                message: 'fatal error'
            });
        }
    } catch(error){
        res.status(500).json({
            result: false,
            message: 'An error has been ocurred while the news category was modified',
            error: error
        })
    }
}

async function deleteCategory(req, res){
    const categoryId = req.params.id;

    const deleteData = {
        status: false
    }

    try{
        const result = await Category.findOneAndUpdate({ _id: categoryId}, { $set: deleteData });
        console.log(result);
        if (result) {
            res.status(200).json({
                result: true,
                message: 'The news category has been deleted'
            });
        } else {
            res.status(404).json({
                result: false,
                message: 'fatal error'
            });
        }
    } catch(error){
        res.status(500).json({
            result: false,
            message: 'An error has been ocurred while the news category was deleted',
            error: error 
        });
    }
}

module.exports={
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}