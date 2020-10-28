import React, { useState, useEffect } from 'react';
import NavBar from './component/navbar/navbar';
import Banner from './component/banner/banner'
import Weather from './component/weather/weather';
import News from './component/news/news';
import World from './component/world/world';
import Finance from './component/finance/finance'
import Science from './component/science/science'
import SportImages from './component/sport/images/sport_images';
import SportNews from './component/sport/news/sport_news';

// loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import { Layout, Card } from 'antd';


import 'antd/dist/antd.css';
import './App.css';

// ant design
const { Meta } = Card;

function App() {
  const [load, setLoad] = useState(false);
  const [curren, setCurren] = useState();
  const [weather, setWeather] = useState();
  const [news, setNews] = useState();
  const [world, setWorld] = useState();
  const [sport, setSport] = useState(false);
  const [infoSport, setInfoSport] = useState(false);
  const [banner, setBanner] = useState(true);
  const [science, setScience] = useState();
  const [scienceDisplay, setScienceDisplay] = useState();
  const [companies, setCompanies] = useState([]);




  useEffect(() => {
    setScienceDisplay(false)
    fetch(`http://127.0.0.1:5000//world`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWorld(data.articles))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch(`http://127.0.0.1:5000//science`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setScience(data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch(`http://127.0.0.1:5000//yahoo`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.log(error))
  }, [])

  const weatherCheck = (city, country) => {
    setBanner(false)
    setLoad(true)
    setNews()
    setWorld()
    setSport(false)
    setInfoSport()
    setCurren()
    setScienceDisplay(false)
    fetch(`http://127.0.0.1:5000//weather/${country}/${city}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWeather(data.data[0]))
      .catch(error => console.log(error))
    setTimeout(() => setLoad(false), 1500)
  }

  const newsCheck = (country) => {
    setBanner(false)
    setLoad(true)
    setWeather()
    setWorld()
    setSport(false)
    setInfoSport()
    setCurren()
    setScienceDisplay(false)
    fetch(`http://127.0.0.1:5000//news/${country}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.log(error))
    setTimeout(() => setLoad(false), 1500)
  }

  const newsWorldCheck = () => {
    setBanner(false)
    setLoad(true)
    setWeather()
    setNews()
    setSport(false)
    setInfoSport()
    setCurren()
    setScienceDisplay(false)
    fetch(`http://127.0.0.1:5000//world`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWorld(data.articles))
      .catch(error => console.log(error))
    setTimeout(() => setLoad(false), 1500)
  }

  const sportCheck = () => {
    setBanner(false)
    setLoad(true)
    setWeather()
    setNews()
    setWorld()
    setCurren()
    setInfoSport()
    setSport(true)
    setLoad(false)
    setScienceDisplay(false)
  }

  const newsSport = (sport) => {
    setBanner(false)
    setLoad(true)
    setSport(false)
    setWeather()
    setNews()
    setWorld()
    setCurren()
    setScienceDisplay(false)
    fetch(`http://127.0.0.1:5000//sport/${sport}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setInfoSport(data.articles))
      .catch(error => console.log(error))
    setTimeout(() => setLoad(false), 1500)
  }

  const currency = () => {
    setBanner(false)
    setLoad(true)
    setSport(false)
    setWeather()
    setNews()
    setWorld()
    setInfoSport()
    setScienceDisplay(false)
    let currencies = [
      { from: "USD", to: "GBP" },
      { from: "USD", to: "PLN" },
      { from: "USD", to: "EUR" }]
    Promise.all(currencies.map(x => fetch(`http://127.0.0.1:5000/currency/${x.from}/${x.to}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })))
      .then(response => Promise.all(response.map(x => x.json())))
      .then(data => setCurren(data))
      .catch(error => console.log(error))
    setTimeout(() => setLoad(false), 1500)
  }

  const scienceCheck = () => {
    setBanner(false)
    setLoad(true)
    setSport(false)
    setWeather()
    setNews()
    setWorld()
    setInfoSport()
    setCurren()
    setScienceDisplay(true)
    setTimeout(() => setLoad(false), 1500)
  }

  return (
    <div className="App">
    <Layout>
      <NavBar scienceCheck={scienceCheck} currency={currency} sportCheck={sportCheck} newsWorldCheck={newsWorldCheck} newsCheck={newsCheck} weatherCheck={weatherCheck}/>
      <Layout>
      
          {banner &&
            <Banner/>
            }
          {load &&
            <Loader type="Watch" color="#FFF" height={120} width={120} className="loader" />}
          {!load &&
            <div>
              <div>
                {scienceDisplay &&
                  <Science science={science} />
                }
              </div>
              {curren &&
                <Finance companies={companies} curren={curren}/>
              }
              {weather &&
                <Weather data={weather}/>
                }
              {news &&
                <News news={news} />
              }
              {world &&
                <World world={world} />
              }
              {sport &&
                <SportImages newsSport={newsSport} />
              }
              {infoSport &&
                <SportNews infoSport={infoSport} />
              }
            </div>
          }
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
