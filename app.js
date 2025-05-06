// Import necessary packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Importing the category routes
const homeRoutes = require('./routes/home.route');
//const trendingTopicsRoutes = require('./routes/trendingTopics.route');
//const pakistanNewsRoutes = require('./routes/pakistanNews.route');
//const worldEventsRoutes = require('./routes/worldEvents.route');
//const sportsUpdatesRoutes = require('./routes/sportsUpdates.route');
//const entertainmentNewsRoutes = require('./routes/entertainmentNews.route');
//const businessInsightsRoutes = require('./routes/businessInsights.route');
//const healthWellnessRoutes = require('./routes/healthWellness.route');
//const scienceTechRoutes = require('./routes/scienceTech.route');
//const curiousBizarreRoutes = require('./routes/curiousBizarre.route');
//const zeroPointInsightsRoutes = require('./routes/zeroPointInsights.route');
//const specialFeaturesRoutes = require('./routes/specialFeatures.route');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });


// Define API routes
app.use('/api/home', homeRoutes);
//app.use('/api/trending-topics', trendingTopicsRoutes);
//app.use('/api/pakistan-news', pakistanNewsRoutes);
//app.use('/api/world-events', worldEventsRoutes);
//app.use('/api/sports-updates', sportsUpdatesRoutes);
//app.use('/api/entertainment-news', entertainmentNewsRoutes);
//app.use('/api/business-insights', businessInsightsRoutes);
//app.use('/api/health-wellness', healthWellnessRoutes);
//app.use('/api/science-technology', scienceTechRoutes);
//app.use('/api/curious-bizarre', curiousBizarreRoutes);
//app.use('/api/zero-point-insights', zeroPointInsightsRoutes);
//app.use('/api/special-features', specialFeaturesRoutes);

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the News API!');
});

// Start the server
// Note: The server starts in the mongoose connection success callback