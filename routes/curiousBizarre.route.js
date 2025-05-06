const express = require('express');
const {
    getAllCuriousBizarre,
    createCuriousBizarreCategory
} = require('../controllers/category.controller');

const router = express.Router();

// Curious & Bizarre Routes
router.get('/', getAllCuriousBizarre);
router.post('/', createCuriousBizarreCategory);

module.exports = router;