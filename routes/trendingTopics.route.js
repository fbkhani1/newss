const express = require('express');
const {
    getAllTrendingTopics,
    createTrendingTopicsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Trending Topics Routes
router.get('/', getAllTrendingTopics);
router.post('/', createTrendingTopicsCategory);

module.exports = router;