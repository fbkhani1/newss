const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, default: 'general' } // Optional category field
});

const news = mongoose.model('news', newsSchema);
module.exports = news;