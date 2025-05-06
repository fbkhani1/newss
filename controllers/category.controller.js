const Category = require('../models/category.model');

// Helper function to find categories by name
const findCategoriesByName = async (name) => {
    return await Category.find({ name });
};

// Breaking News
exports.getAllBreakingNews = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Breaking News');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBreakingNewsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Trending Topics
exports.getAllTrendingTopics = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Trending Topics');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTrendingTopicsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Pakistan News
exports.getAllPakistanNews = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Pakistan News');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPakistanNewsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// World Events
exports.getAllWorldEvents = async (req, res) => {
    try {
        const categories = await findCategoriesByName('World Events');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createWorldEventsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Sports Updates
exports.getAllSportsUpdates = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Sports Updates');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSportsUpdatesCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Entertainment News
exports.getAllEntertainmentNews = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Entertainment News');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createEntertainmentNewsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Business Insights
exports.getAllBusinessInsights = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Business Insights');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBusinessInsightsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Health & Wellness
exports.getAllHealthWellness = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Health & Wellness');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createHealthWellnessCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Science & Technology
exports.getAllScienceTech = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Science & Technology');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createScienceTechCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Curious & Bizarre
exports.getAllCuriousBizarre = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Curious & Bizarre');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCuriousBizarreCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Zero Point Insights
exports.getAllZeroPointInsights = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Zero Point Insights');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createZeroPointInsightsCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Special Features
exports.getAllSpecialFeatures = async (req, res) => {
    try {
        const categories = await findCategoriesByName('Special Features');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSpecialFeaturesCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};