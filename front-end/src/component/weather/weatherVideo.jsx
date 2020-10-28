import React from 'react';

import './weatherVideo.css';

function WeatherVideo({ weather }) {
    return (
        <div>
            {weather.weather.description.includes('clouds' || 'Drizzle') &&
                <video className='videoTag' autoPlay loop muted>
                    <source src='/image/cloud.mp4' type='video/mp4' />
                </video>}
            {weather.weather.description.includes('rain' || 'drizzle' || 'sleet') &&
                <video className='videoTag' autoPlay loop muted>
                    <source src='/image/rain.mp4' type='video/mp4' />
                </video>}
            {weather.weather.description.includes('Clear') &&
                <video className='videoTag' autoPlay loop muted>
                    <source src='/image/sun.mp4' type='video/mp4' />
                </video>}
            {weather.weather.description.includes('fog' || 'dust' || 'haze' || 'smoke' || 'mist') &&
                <video className='videoTag' autoPlay loop muted>
                    <source src='/image/fog.mp4' type='video/mp4' />
                </video>}
            {weather.weather.description.includes('Thunderstorm') &&
                <video className='videoTag' autoPlay loop muted>
                    <source src='/image/thunderstorm.mp4' type='video/mp4' />
                </video>}
            {weather.weather.description.includes('snow' || 'fluries') &&
                <video className='videoTag' autoPlay loop muted>
                    <source src='/image/snow.mp4' type='video/mp4' />
                </video>}
        </div>
    )
}

export default WeatherVideo