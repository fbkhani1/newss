const express = require('express');
const {
    getAllBusinessInsights,
    createBusinessInsightsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Business Insights Routes
router.get('/', getAllBusinessInsights);
router.post('/', createBusinessInsightsCategory);

module.exports = router;