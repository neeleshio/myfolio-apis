const mongoose = require('mongoose')

const userAgentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    created: { type: String, default: Date },
    ip: { type: String, required: true },
    os: { type: Object, required: true },
    browser: { type: Object, required: true },
})

module.exports = mongoose.model('userAgents', userAgentSchema)