WEATHER DASHBOARD

OVERVIEW:
for my final project for cs50w i decided to make a weather dashboard application, the app is built using django, css, javascrit and html.

FEATURES:
- Search for weather forecasts by city name.
- View current weather conditions, including temperature, humidity, wind speed, and pressure.
- Display sunrise and sunset times.
- View hourly forecasts for the next 9 hours.
- Display a 5-day weather forecast.
- Change the theme colour of the page
- Search weather forecast by current location


TECHNOLOGIES USED:
- Django: Web framework for building the backend.
- OpenWeatherMap API: Used for fetching weather data.
- Bootstrap: Front-end framework for styling.
- JavaScript: Used for dynamic interactions on the client side.
- Boxicons: for nice icons
- Worldtime API: for fetching the current time on a certain location
- Sunrise and sunset API: to know the sunrise and sunset of a city (this info is not given in the OpenWeatherMap API)



COMPLEXITY:
i think the major complexity of the app is the use of API, i used 3 diferent api on this projects and also having to display, all that information on the html was a real challenge to me, i also spent a lot of time on the css so that the website looks nice


FILES CREATED:
styles.css: this file contains all the css used on the app
index.html: this file contains all the html used on the app
weather.js: this file contains all the javascript used on the app like the api calls and the theme changing button logic


HOW TO RUN:
    git clone https://github.com/lolocompa/weather_dashboard.git.
    cd weather_dashboard.
    get all API keys and update in the weather.js file.
    python manage.py runserver.
    Open your web browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).
.

