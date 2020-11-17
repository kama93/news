import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";

import WeatherCast from './weatherCast'
import WeatherVideo from './weatherVideo'
import './weatherCast.css'

interface ParamTypes {
  country: string,
  city: string
}

function Weather() {
  let { country, city } = useParams<ParamTypes>();
  const [weather, setWeather] = React.useState();

  // fetch data for weather info - UK (London) or Poland (Warsaw)
  useEffect(() => {
    fetch(`/api/weather/${country}/${city}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {console.log(data); setWeather(data.data[0])})
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