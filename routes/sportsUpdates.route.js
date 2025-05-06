const express = require('express');
const {
    getAllSportsUpdates,
    createSportsUpdatesCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Sports Updates Routes
router.get('/', getAllSportsUpdates);
router.post('/', createSportsUpdatesCategory);

module.exports = router;