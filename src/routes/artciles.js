const express = require('express');
const router = express.Router();
const Articles = require('../models/articles')
const mongoose = require('mongoose');

router.post('/articles', (req, res, next) => {
    const article = new Articles({
        _id: new mongoose.Types.ObjectId(),
        difficulty: req.body.difficulty,
        topic: req.body.topic,
        title: req.body.title,
        mainImg: req.body.mainImg,
        keywords: req.body.keywords
    })

    article.save().then(result => {
        res.status(200).json({
            message: 'artcle created',
            createdArticle: article
        })
    }).catch(err => {
        res.status(400).json({
            message: "error"
        })
    })
})

router.get('/articles', (req, res, next) => {
    Articles.find({}).then((articles) => {
        res.send(articles)
    })
})

module.exports = router