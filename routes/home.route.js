const express = require('express');
const {
    getAllBreakingNews,
    createBreakingNewsCategory
} = require('../controllers/category.controller');

const router = express.Router();

router.get('/', (req, res) => {
    req.send('breakingnews');
  });
  router.post('/', (req, res) => {
    req.send('newbreakingnews');
 }); // Create a new breaking news category

module.exports = router;