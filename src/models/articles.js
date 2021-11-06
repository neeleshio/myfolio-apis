const mongoose = require('mongoose')

const articlesSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    created: { type: Date, default: Date },
    difficulty: { type: String, required: true },
    topic: { type: String, required: true },
    title: { type: String, required: true },
    mainImg: { type: String, required: true },
    keywords: { type: Array, required: true },
})

module.exports = mongoose.model('articles', articlesSchema)