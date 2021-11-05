const mongoose = require('mongoose')

const articleContentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    article: { type: mongoose.Types.ObjectId, ref: 'articles' },
    content: { type: Array, required: true },
    likes: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('articleContent', articleContentSchema)