const express = require('express');
const {
    getAllEntertainmentNews,
    createEntertainmentNewsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Entertainment News Routes
router.get('/', getAllEntertainmentNews);
router.post('/', createEntertainmentNewsCategory);

module.exports = router;