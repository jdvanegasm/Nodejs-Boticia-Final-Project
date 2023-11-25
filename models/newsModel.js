const express = require('express');
const router = express.Router();
const News = require('../dtos/newsDTO');

async function createNews(req, res){
    try{
        const { title, url, source, newsCategories } = req.body;
        const newNewsDTO = new newsDTO(title, url, source, newsCategories);
        const newNews = new News(newNewsDTO);
        const result = await newNews.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getNews(req, res){
    try{
        const news = await news.findOne({_id: req.body._id});
        res.status(200).json({news});
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function updateNews(req, res){
    const newsId = req.params.id;

    const updatedData = {
        title: req.body.title,
        url: req.body.url,
        source: req.body.source,
        newsCategories: req.body.source
    };

    try{
        const result = await news.findOneAndUpdate({ _id: newsId}, { $set: updatedData });
        console.log(result);
        if (result) {
            res.status(200).json({
                result: true,
                message: 'The news has been modified'
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
            message: 'An error has been ocurred while the news was modified',
            error: error
        })
    }
}

async function deleteNews(req, res){
    const newsId = req.params.id;

    const deleteData = {
        status: false
    }

    try{
        const result = await News.findOneAndUpdate({ _id: newsId}, { $set: deleteData });
        console.log(result);
        if (result) {
            res.status(200).json({
                result: true,
                message: 'The news has been deleted'
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
            message: 'An error has been ocurred while the news was deleted',
            error: error 
        });
    }
}

module.exports={
    createNews,
    getNews,
    updateNews,
    deleteNews
}