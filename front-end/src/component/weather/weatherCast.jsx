import React from 'react';
import './weatherCast.css'

function WeatherCast({ data }) {
    return (
        <div className="weather-container">
            <h1 className="weather-title">Today weather for {data.city_name}</h1>
            <div className="sun-container">
                <p className="marg mobile">Sunrise: {data.sunrise}</p>
                <img src='/image/sun.png' alt='sun' className="marg sun" />
                <p className="mobile">Sunset: {data.sunset}</p>
            </div>
            <p className="mobile">{data.weather.description}</p>
            <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt='weather' className="marg sun" />
            <div className="temp-container">
                <p className="marg mobile">Temperature: {data.app_temp}°C</p>
                <p className="mobile">Wind: {data.wind_cdir_full}</p>
            </div>
        </div>
    )
}

export default WeatherCast
