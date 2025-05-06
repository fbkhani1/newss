const express = require('express');
const {
    getAllWorldEvents,
    createWorldEventsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// World Events Routes
router.get('/', getAllWorldEvents);
router.post('/', createWorldEventsCategory);

module.exports = router;