
# News AI App(Basic Version)

Welcome to the News AI App! This application utilizes AI-powered voice recognition and natural language processing to fetch news articles from various categories. Stay up-to-date with the latest news by simply using your voice!

## Features
- Fetch news articles from different categories: General, Business, Entertainment, Health, Science, Sports, and Technology.
- AI-powered voice recognition: Simply speak the command to get the news you want.
- Interactive and user-friendly interface: Choose categories from a dropdown menu or use voice commands.
- Read more: Open news articles in a new tab to read the full content.
## Technologies Used

- React: JavaScript library for building user interfaces.
- Alan AI: AI platform for voice-enabled and conversational experiences.
- NewsAPI: API for fetching news articles from various sources.
- Axios: Promise-based HTTP client for making API requests.
- Moment.js: JavaScript library for date and time manipulation.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/utk145/basic-v1-news-ai-app.git    
   ```bash
2. Navigate to the project directory:
        
    ```cd basic-v1-news-ai-app```

3. Install dependencies

    ```npm install```

4. Obtain API keys:
- Sign up on the Alan AI website and get an API key.
- Register on the NewsAPI website and obtain an API key.    

5. Set up environment variables:
- Create a .env file in the root directory.
- Add the following lines to the .env file and replace `YOUR_ALAN_API_KEY` and `YOUR_NEWS_API_KEY` with your respective API keys:

    ```VITE_REACT_APP_ALAN_API=YOUR_ALAN_API_KEY```
    ```VITE_REACT_APP_NEWS_API=YOUR_NEWS_API_KEY```

6. Start the development server: 

        `npm run dev`
## Usage
- Open the application in your browser (by default, it runs on http://localhost:3000 or 5173).
- Click on the microphone icon or use the voice command "Get the news" to initiate voice recognition.
- Choose a category from the dropdown menu or speak the category you want to fetch news from.


    Enjoy reading the latest news articles!
## Acknowledgements
[Alan AI](https://alan.app/) for their voice AI platform.

[NewsAPI](https://newsapi.org/) for providing the news articles API.


Suggestions and modifications for better UI/UX and features are appreciated. 

I apologise for not being able to provide the live website as it wasn't being deployed properly on any of the hosting platforms because of some protocol issue. :) 