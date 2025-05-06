const express = require('express');
const {
    getAllZeroPointInsights,
    createZeroPointInsightsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Zero Point Insights Routes
router.get('/', getAllZeroPointInsights);
router.post('/', createZeroPointInsightsCategory);

module.exports = router;