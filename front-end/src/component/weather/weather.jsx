import React from 'react';
import WeatherCast from './weatherCast'
import WeatherVideo from './weatherVideo'
import './weatherCast.css'

function Weather({ data }) {
    return (
        <div style={{ position: 'relative' }}>
            <WeatherCast data={data} />
            <WeatherVideo weather={data} />
        </div>
    )
}

export default Weather