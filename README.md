# Weather Dashboard

## Overview
The Weather Dashboard is a web application developed as a final project for CS50W. It is designed to provide users with comprehensive weather forecasts and current weather conditions. The application is built using Django, CSS, JavaScript, and HTML.

## Features
- **City Search**: Users can search for weather forecasts by entering a city name.
- **Current Weather Conditions**: Displays temperature, humidity, wind speed, and pressure for the searched location.
- **Sunrise and Sunset Times**: Shows the sunrise and sunset times for the selected city.
- **Hourly Forecasts**: Provides weather forecasts for the next 9 hours.
- **5-Day Forecast**: Displays a 5-day weather forecast.
- **Theme Color Change**: Allows users to change the theme color of the page.
- **Current Location Weather**: Users can search for weather forecasts based on their current location.

## Technologies Used
- **Django**: A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
- **OpenWeatherMap API**: This RESTful API is used to obtain weather data for any location.
- **Bootstrap**: A front-end framework used for developing responsive and mobile-first websites.
- **JavaScript**: Used for creating dynamic and interactive web content.
- **Boxicons**: A simple vector icons set carefully crafted for designers and developers to use in their projects.
- **Worldtime API**: Utilized for fetching the current time based on location.
- **Sunrise and Sunset API**: Provides sunrise and sunset times as this information is not available through the OpenWeatherMap API.

## Complexity
The major complexity of this application lies in the integration and use of multiple APIs to fetch and display weather data. Additionally, considerable effort was put into the CSS to ensure the website is visually appealing.

## Files
- `styles.css`: Contains all the CSS used in the application.
- `index.html`: The main HTML file of the application.
- `weather.js`: Contains all the JavaScript used in the application, including API calls and theme-changing button logic.

## How to Run
1. Clone the repository:
git clone https://github.com/lolocompa/weather_dashboard.git

2. Navigate to the project directory:
cd weather_dashboard

3. Obtain all necessary API keys and update them in the `weather.js` file.
4. Start the Django development server:
python manage.py runserver

5. Open your web browser and navigate to `http://127.0.0.1:8000/`.

Enjoy accessing comprehensive weather forecasts and current weather conditions with the Weather Dashboard!
