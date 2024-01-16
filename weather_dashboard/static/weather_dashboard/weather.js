
//change theme color
function span2() {

 document.querySelector("body").style.backgroundColor = "#212529";
 document.querySelector(".theme_btn").style.backgroundColor = "white";   
 document.querySelector(".circle1").style.backgroundColor = "white";
 document.querySelector(".circle2").style.backgroundColor = "black";
 document.querySelector("#sun").style.color = "black";            
 document.querySelector("#moon").style.color = "black";


                        
}

function span1() {

    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".theme_btn").style.backgroundColor = "black";   
    document.querySelector(".circle1").style.backgroundColor = "white";
    document.querySelector("#sun").style.color = "white";            
    document.querySelector("#moon").style.color = "white";

        
}


document.addEventListener("DOMContentLoaded", function() {
    const city = document.querySelector(".search_bar");
    const search_btn = document.querySelector(".make_search")
    const box2 = document.querySelector(".box2")
    const box1 = document.querySelector(".container_day")
    const box3 = document.querySelector(".all_daily_cards")
    const box4 = document.querySelector(".all_cards")
    const current_location = document.querySelector(".current_btn")


    const API_key  = "0273bd77dd7cd24f0fe90bd97af3baab";
    const API_key2 = "mV/M4u6lAUmaG7+QLyRdHA==arT2r3tBHX8yDda8";
    let sunrise, sunset;


    const create_hour_card = (hour_list) => {
        return `<div class="card">
                    <h5>${hour_list.dt_txt.split(" ")[1]}</h5>
                    <img src="https://openweathermap.org/img/wn/${hour_list.weather[0].icon}@2x.png" alt="">
                    <h5>${(hour_list.main.temp - 273.15).toFixed(2)}°C</h5>
                </div>`;
    }

    const get_hourly = (lat, lon) => {
        const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_key}`;

        fetch(WEATHER_API_URL).then(res => res.json()).then(data => { 
            console.log(data)
            hour_list = []; 
            for(let i = 0; i < 9; i++ ) {
                hour_list.push(data.list[i])
            }

            box4.innerHTML = "";
            hour_list.slice(3).forEach(weather_item => {
                box4.insertAdjacentHTML("beforeend",create_hour_card(weather_item))

            })

            

        })
    } 

    


    const daily_card = (weather_item) => {
        console.log(weather_item)
        return `<div class="day_data">
                    <img src="https://openweathermap.org/img/wn/${weather_item.weather[0].icon}@2x.png" height="55" alt="">
                    <h5>${(weather_item.main.temp - 273.15).toFixed(2)}°C</h5>
                    <h5>${weather_item.dt_txt.split(" ")[0]}</h5>
                </div>`;
                }



    const get_city_data = (city, lat, lon) => {
        const CITY_API_URL = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;

        fetch(CITY_API_URL, {
            headers: { 'X-Api-Key': API_key2 },
        })
        .then(res => res.json())
        .then(result => {

            box1.innerHTML = "";
            box1.insertAdjacentHTML("beforeend", create_box1(result, city))
            city = "";
        })
        .catch(error => {
            console.error('Error fetching city data: ', error);
        });
    }

    const create_box1 = (data, city) => {
        return `<h3>${city}</h3>
                <h1>${data.hour}:${data.minute}</h1>
                <p>${data.day_of_week}, ${data.day}/${data.month}/${data.year}</p>`;
    }

    const create_weather_card = (weather_item, sunrise, sunset) => {
         return `
                    <div class="temp">
                        <h3>${(weather_item.main.temp - 273.15).toFixed(2)}°C</h3>
                        <h4>feels like ${(weather_item.main.feels_like - 273.15).toFixed(2)}°C</h4>
                    </div>
                    <div class="weather">
                        <img src="https://openweathermap.org/img/wn/${weather_item.weather[0].icon}@4x.png" alt="">
                        <h3>${weather_item.weather[0].main}</h3>
                    </div>
                    <div class="top_right">
                        <div class="humidity">
                            <i class="bi bi-water"></i>
                            <h5>Humidity</h5>
                            <h4>${weather_item.main.humidity}%</h4>
                        </div>
                        <div class="wind">
                            <i class='bx bx-wind'></i>
                            <h5>Wind Speed</h5>
                            <h4>${weather_item.wind.speed} M/S</h4>
                        </div>
                        <div class="preassure">
                            <i class='bx bx-tachometer' ></i>
                            <h5>Preassure</h5>
                            <h4>${weather_item.main.pressure}hPa</h4>
                        </div>
                    </div>
                    <div class="sun_info">
                        <div class="sunrise">
                            <i class="bi bi-sunrise"></i>
                            <h3>Sunrise</h3>
                            <h4>${sunrise}</h4>
                        </div>
                        <div class="sunset">
                            <i class="bi bi-sunset"></i>
                            <h3>Sunset</h3>
                            <h4>${sunset}</h4>
                        </div>
                    </div>    

                </div>`

    }





    const get_weather = (city, lat, lon) => {
        const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_key}`;

        fetch(WEATHER_API_URL).then(res => res.json()).then(data => { 

            const unique_forecast = [];
            const five_days_forecast = data.list.filter(forecast => {
                const forectast_date = new Date(forecast.dt_txt).getDate();
                if(!unique_forecast.includes(forectast_date) && unique_forecast.length < 6) {
                    return unique_forecast.push(forectast_date)
                }
            })

            //get sunrise and sunset
            const SUN_INFO = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
            fetch(SUN_INFO).then(res => res.json()).then(info => { 
                sunrise = info.results.sunrise;
                sunset = info.results.sunset;


                
                city = "";
                box2.innerHTML = "";
                box3.innerHTML = "";

                box2.insertAdjacentHTML("beforeend", create_weather_card(five_days_forecast[0], sunrise, sunset))
                five_days_forecast.slice(1).forEach(weather_item => {
                    box3.insertAdjacentHTML("beforeend", daily_card(weather_item)); 
                })

            })


            

        }).catch(() => {
            alert("an error has occured when trying to feth the weather forecast")
        })
    }

    const city_cordinates = () => {
        let city_name = city.value.trim()
        if(!city_name) return
        const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=${API_key}`;

        fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
            if (!data.length) return alert("an error has occured when trying to feth coordinates")
            const { name, lat, lon } = data[0];
            get_weather(name, lat , lon);
            get_city_data(name, lat, lon)
            get_hourly(lat, lon)
        }).catch(() => {
            alert("an error has occured when trying to feth coordinates")
        })
    }

    const my_coordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const REVERSE_GEOCODING_API = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_key}`;

                fetch(REVERSE_GEOCODING_API).then(res => res.json()).then(data => {
                    const { name, lat, lon } = data[0];
                    get_weather(name, lat , lon);
                    get_city_data(name, lat, lon)
                    get_hourly(lat, lon)
                }).catch(() => {
                    alert("an error has occured when trying to feth coordinates")
                })
            },
            error => {
                alert("you denied to use location")
            }
        );
    }

    search_btn.addEventListener("click", city_cordinates);
    current_location.addEventListener("click", my_coordinates)
})
