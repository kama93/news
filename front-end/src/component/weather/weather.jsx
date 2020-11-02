import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import WeatherCast from './weatherCast'
import WeatherVideo from './weatherVideo'
import './weatherCast.css'

function Weather() {
  let { country, city } = useParams();
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000//weather/${country}/${city}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWeather(data.data[0]))
      .catch(error => console.log(error))
  }, [country, city])

  return (
    <div style={{ position: 'relative' }}>
      {weather &&
        <div>
          <WeatherCast data={weather} />
          <WeatherVideo weather={weather} />
        </div>
      }
    </div>
  )
}

export default Weather