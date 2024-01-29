# Weather Dashboard

## Overview

For my final project for CS50W, I developed a Weather Dashboard application. This web app is built using Django, HTML, CSS, and JavaScript, integrating various APIs to provide users with detailed weather information. The goal was to create a user-friendly interface for checking weather conditions and forecasts for different locations.

## Features

- Search for weather forecasts by city name.
- View current weather conditions, including temperature, humidity, wind speed, and pressure.
- Display sunrise and sunset times.
- View hourly forecasts for the next 9 hours.
- Display a 5-day weather forecast.
- Change the theme color of the page.
- Search weather forecast by current location.

## Technologies Used

- Django: Web framework for building the backend.
- OpenWeatherMap API: Fetches weather data for different locations.
- Bootstrap: Front-end framework for styling.
- JavaScript: Manages dynamic interactions on the client side.
- Boxicons: Used for stylish icons.
- Worldtime API: Fetches the current time of a specified location.
- Sunrise and sunset API: Determines the sunrise and sunset times for a city.

## Complexity

The main complexity of the app lies in the integration of multiple APIs. The project utilizes three different APIs to gather comprehensive weather data, and presenting this information on the HTML required careful planning. Significant time was invested in designing and styling the interface using CSS to ensure an appealing and responsive website.

## Files Created

- `styles.css`: Contains all the CSS used for styling the app.
- `index.html`: Holds the HTML structure of the app.
- `weather.js`: Manages JavaScript logic, including API calls and theme-changing button logic.

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/lolocompa/weather_dashboard.git
    cd weather_dashboard
    ```

2. Obtain API keys for OpenWeatherMap, Worldtime, and Sunrise and update them in the `weather.js` file.

3. Run the Django development server:

    ```bash
    python manage.py runserver
    ```

4. Open your web browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

## Additional Information

- Ensure API keys are kept secure and not shared publicly.
- Styling has been optimized for a visually pleasing experience across devices.