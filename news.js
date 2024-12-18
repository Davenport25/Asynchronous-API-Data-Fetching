// Import the axios library
axios = require('axios');

// Define the base URL and API key for the news API
API_KEY = '58bede635b2a4f6f95f226249974e05c'; // Replaced with my NewsAPI key
BASE_URL = 'https://newsapi.org/v2/top-headlines';

// Function to fetch news articles asynchronously
News = async (country) => {
  try {
response = await axios.get(BASE_URL, {
    params: {
        country: country, // Country code (e.g., 'us' for the United States)
        apiKey: API_KEY,
      },
    });

    const articles = response.data.articles;

    // Display the fetched articles
    console.log(`Top news headlines for ${country} is:`);
    articles.forEach((article, index) => {
      console.log(`${index + 1}. ${article.title} (${article.source.name})`);
    });
  } catch (error) {
    // Handle errors (e.g., network issues or invalid API key)
    if (error.response) {
      console.error(`Error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error('Error: No response received from the server.');
    } else {
      console.error(`Error: ${error.message}`);
    }
  }
};

// Fetch and display news for the United States
News('us');
