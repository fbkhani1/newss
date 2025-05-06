const express = require('express');
const {
    getAllScienceTech,
    createScienceTechCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Science & Technology Routes
router.get('/', getAllScienceTech);
router.post('/', createScienceTechCategory);

module.exports = router;