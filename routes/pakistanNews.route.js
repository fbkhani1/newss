const express = require('express');
const {
    getAllPakistanNews,
    createPakistanNewsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Pakistan News Routes
router.get('/', getAllPakistanNews);
router.post('/', createPakistanNewsCategory);

module.exports = router;