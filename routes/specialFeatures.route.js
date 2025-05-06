const express = require('express');
const {
    getAllSpecialFeatures,
    createSpecialFeaturesCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Special Features Routes
router.get('/', getAllSpecialFeatures);
router.post('/', createSpecialFeaturesCategory);

module.exports = router;