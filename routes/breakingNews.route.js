const express = require('express');
const {
    getAllBreakingNews,
    createBreakingNewsCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Breaking News Routes
const express = require('express');


// Define your routes
router.get('/', (req, res) => {
    res.send('Hello from the home route!');
});
module.exports = router;