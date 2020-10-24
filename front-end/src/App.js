import React, { useState, useEffect } from 'react';
import Weather from './component/weather/weather';
import News from './component/news/news';
import World from './component/world/world';
import SportImages from './component/sport/images/sport_images';
import SportNews from './component/sport/news/sport_news';

// loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, DollarOutlined, BulbOutlined, ReadOutlined, ThunderboltOutlined, SkinOutlined } from '@ant-design/icons';


import 'antd/dist/antd.css';
import './App.css';

// ant design
const { Header } = Layout;

function App() {
  const [load, setLoad] = useState(false)
  const [weather, setWeather] = useState()
  const [news, setNews] = useState()
  const [world, setWorld] = useState()
  const [sport, setSport] = useState(false)
  const [infoSport, setInfoSport] = useState(false)
  const [banner, setBanner] = useState(true)

  useEffect(() => {
    fetch(`http://127.0.0.1:5000//world`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWorld(data.articles))
      .catch(error => console.log(error))
  }, [])

  const weatherCheck = (city, country) => {
    setBanner(false)
    setLoad(true)
    setNews()
    setWorld()
    setSport(false)
    setInfoSport()
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
    setInfoSport()
    setSport(true)
    setLoad(false)
  }

  const newsSport = (sport) => {
    setBanner(false)
    setLoad(true)
    setSport(false)
    setWeather()
    setNews()
    setWorld()
    fetch(`http://127.0.0.1:5000//sport/${sport}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setInfoSport(data.articles))
      .catch(error => console.log(error))
    setTimeout(() => setLoad(false), 1500)
  }

  const menuUK = (
    <Menu>
      <Menu.Item key="1" icon={<ThunderboltOutlined />} onClick={() => weatherCheck('London', 'UK')}>Weather</Menu.Item>
      <Menu.Item key="2" icon={<ReadOutlined />} onClick={() => newsCheck('gb')}>News</Menu.Item>
      <Menu.Item key="3" icon={<SkinOutlined />} onClick={() => sportCheck()}>Sport</Menu.Item>
    </Menu>
  );
  const menuPL = (
    <Menu>
    <Menu.Item key="5" icon={<ThunderboltOutlined />} onClick={() => weatherCheck('Warsaw', 'Pl')}>Weather</Menu.Item>
    <Menu.Item key="6" icon={<ReadOutlined />} onClick={() => newsCheck('pl')}>News</Menu.Item>
    <Menu.Item key="7" icon={<SkinOutlined />} onClick={() => sportCheck()}>Sport</Menu.Item>
    </Menu>
  );

  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <img alt='logo' src='/image/world.png' className="logo-img" />
            <Menu.Item key="3" icon={<DollarOutlined />}>Finance</Menu.Item>
            <Menu.Item key="5" icon={<BulbOutlined />}>Science</Menu.Item>
            <Menu.Item key="4" icon={<HomeOutlined />} onClick={() => newsWorldCheck()}>World</Menu.Item>
            <Menu.Item key="2" icon={<HomeOutlined />} ><Dropdown overlay={menuUK} icon={<HomeOutlined />}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              UK 
            </a>
          </Dropdown></Menu.Item>
          <Menu.Item key="1" icon={<HomeOutlined />} ><Dropdown overlay={menuPL} icon={<HomeOutlined />}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Poland
            </a>
          </Dropdown></Menu.Item>
          </Menu>
          
        </Header>
        
        <Layout>
        {banner &&
        <section className="banner">
          <div className="page-title-container">
          <h1 className="page-title">Check news from world...</h1>
          </div>
        </section>}
          {load &&
            <Loader type="Watch" color="#FFF" height={120} width={120} className="loader" />}
          {!load &&
            <div>
              {weather &&
                <div style={{ position: 'relative' }}>
                  <Weather data={weather} />
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
                </div>}
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
            </div>}
        </Layout>
      </Layout>,
    </div>
  );
}

export default App;
