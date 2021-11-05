const mongoose = require('mongoose')

const userAgentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    created: { type: Date, default: Date.now },
    ip: { type: String, required: true },
    os: { type: Object, required: true },
    browser: { type: Object, required: true },
})

module.exports = mongoose.model('userAgents', userAgentSchema)