const News = require('../dtos/newsDTO');
const userModel = require('./userModel');

async function createNews(req, res){
    try{
        await userModel.verifyToken(req,res);
        const news = new News({
            title: req.body.title,
            url: req.body.url,
            source: req.body.source,
            newsCategory: req.body.newsCategory
        });
        news.save()
        .then((result) => {
            res.status(201).json({
            error: false,
            message: "The news have been created",
            data: result,
            });
        }).catch((error) => {
            res.status(404).json({
                error: true,
                message: `Server error: ${error}`,
            });
        });
    }catch(error){
        res.status(500).json({
            error: true,
            message: `Fatal Error: ${error}`,
            code: 0
        });
    }
}

async function getNews(req, res){
    try{
        await userModel.verifyToken(req,res);
        const news = await News.findOne({_id: req.body._id});
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
        await userModel.verifyToken(req,res);
        const result = await News.findOneAndUpdate({ _id: newsId}, { $set: updatedData });
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
            error: error.message
        })
    }
}

async function deleteNews(req, res){
    const newsId = req.params.id;

    const deleteData = {
        status: false
    }

    try{
        await userModel.verifyToken(req,res);
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