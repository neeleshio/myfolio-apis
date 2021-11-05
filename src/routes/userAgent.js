const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserAgent = require('../models/userAgent')

router.post('/user-ag', (req, res, next) => {
    const userAgent = new UserAgent({
        _id: new mongoose.Types.ObjectId(),
        ip: req.body.ip,
        os: req.body.os,
        browser: req.body.browser
    })

    userAgent.save().then(result => {
        res.status(200).json({
            message: 'success'
        })
    }).catch(err => {
        res.status(400).json({
            message: "error"
        })
    })
})

module.exports = router