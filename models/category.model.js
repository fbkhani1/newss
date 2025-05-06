const Category = require('./models/category.model');

async function createCategories() {
    const homeCategory = new Category({
        name: 'Home',
        description: 'First priority news category',
        priority: 1
    });

    const breakingNewsCategory = new Category({
        name: 'Breaking News',
        description: 'Second priority news category',
        priority: 2
    });

    const pakistanCategory = new Category({
        name: 'Pakistan',
        description: 'News related to Pakistan',
        priority: 3
    });

    const internationalCategory = new Category({
        name: 'International',
        description: 'Global news and events',
        priority: 4
    });

    const sportsCategory = new Category({
        name: 'Sports',
        description: 'Sports news and updates',
        priority: 5
    });

    const showbizCategory = new Category({
        name: 'Showbiz',
        description: 'Entertainment news and celebrity updates',
        priority: 6
    });

    const businessCategory = new Category({
        name: 'Business',
        description: 'Latest updates in the business world',
        priority: 7
    });

    const healthCategory = new Category({
        name: 'Health',
        description: 'Health and wellness news and tips',
        priority: 8
    });

    const scienceAndTechnologyCategory = new Category({
        name: 'Science',
        description: 'Latest advancements and news in science and technology',
        priority: 9
    });

    const interestingCategory = new Category({
        name: 'Interesting',
        description: 'Interesting and bizarre news and stories',
        priority: 10
    });

    const zeroPointCategory = new Category({
        name: 'Zero Point',
        description: 'News and updates from the Zero Point perspective',
        priority: 11
    });

    const specialFeatureCategory = new Category({
        name: 'Special',
        description: 'Special features and in-depth articles',
        priority: 12
    });

    // Save each category using the correct variable names
    await homeCategory.save();
    await breakingNewsCategory.save();
    await pakistanCategory.save();
    await internationalCategory.save();
    await sportsCategory.save();
    await showbizCategory.save();
    await businessCategory.save();
    await healthCategory.save();
    await scienceAndTechnologyCategory.save();
    await interestingCategory.save();
    await zeroPointCategory.save();
    await specialFeatureCategory.save();

    console.log('Categories created successfully');
}

// Call the function to create categories
createCategories().catch(err => console.error(err));