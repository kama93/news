import React from 'react';
import './weatherCast.css'

function WeatherCast({ data }) {
    return (
        <div className="weather-container">
            <h1 className="weather-title">Today weather for {data.city_name}</h1>
            <div className="sun-container">
                <p className="marg">Sunrise: {data.sunrise}</p>
                <img src='/image/sun.png' alt='sun' className="marg sun" />
                <p>Sunset: {data.sunset}</p>
            </div>
            <p>{data.weather.description}</p>
            <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt='weather' className="marg sun" />
            <div className="temp-container">
                <p className="marg">Temperature: {data.app_temp}°C</p>
                <p>Wind: {data.wind_cdir_full}</p>
            </div>
        </div>
    )
}

export default WeatherCast
