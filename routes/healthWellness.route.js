const express = require('express');
const {
    getAllHealthWellness,
    createHealthWellnessCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Health & Wellness Routes
router.get('/', getAllHealthWellness);
router.post('/', createHealthWellnessCategory);

module.exports = router;