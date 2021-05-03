import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather (props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
    ready: true, 
        temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    description: response.data.weather[0].description,
    });

}

function search() {
    const apiKey = "09a78485014abc9ba4bba90aeb20d6e1";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event) {
    setCity(event.target.value)

}

if (weatherData.ready) { return (
    <div className="Weather">
<form onSubmit={handleSubmit}> 
<div className="row">
<div className="col-9">
<input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
</div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-primary w-100" />
</div>

</div>
</form>

<WeatherInfo data={weatherData} />
</div>
);
} 

else {
search();

    return "Loading...";
}

    
    
}