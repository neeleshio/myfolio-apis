const express = require('express');
const router = express.Router();
const ArticleContent = require('../models/articleContent')
const mongoose = require('mongoose');


router.get('/article-content/:id', (req, res, next) => {
    ArticleContent.find({ article: req.params.id }).populate('article').then(doc => {
        res.send(doc)
    })
})

router.post('/article-content', (req, res, next) => {
    const article = new ArticleContent({
        _id: new mongoose.Types.ObjectId(),
        article: req.body.articleId,
        content: req.body.content,
        likes: req.body.likes
    })

    article.save().then(result => {
        res.status(200).json({
            message: 'artcle content created',
            createdArticle: article
        })
    }).catch(err => {
        res.status(400).json({
            message: "error"
        })
    })
})


module.exports = router