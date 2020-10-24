import React, { useState } from 'react';
import Weather from './component/weather/weather';
import News from './component/news/news';
import World from './component/world/world'

import { Layout, Menu, Card } from 'antd';
import { HomeOutlined, DollarOutlined, BulbOutlined, ReadOutlined, ThunderboltOutlined, SkinOutlined } from '@ant-design/icons';


import 'antd/dist/antd.css';
import './App.css';

// ant design
const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const { Meta } = Card;

function App() {
  const [weather, setWeather] = useState()
  const [news, setNews] = useState()
  const [world, setWorld] = useState()


const weatherCheck = (city, country) => {
    setNews()
    setWorld()
    fetch(`http://127.0.0.1:5000//weather/${country}/${city}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWeather(data.data[0]))
      .catch(error=>console.log(error))
}

const newsCheck = (country) => {
  setWeather()
  setWorld()
  fetch(`http://127.0.0.1:5000//news/${country}`, {
    method: 'get',
    headers: { 'Content-Type' : 'application/json'}
  })
    .then(response => response.json())
    .then(data => setNews(data.articles))
    .catch(error => console.log(error))
}

const newsWorldCheck = () => {
  setWeather()
  setNews()
  fetch(`http://127.0.0.1:5000//world`, {
    method: 'get',
    headers: { 'Content-Type' : 'application/json'}
  })
    .then(response => response.json())
    .then(data => setWorld(data.articles))
    .catch(error => console.log(error))
}
  

  return (
    <div className="App">
    <Layout>
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <img alt='logo' src='/image/world.png' className="logo-img"/>
        <Menu.Item key="3" icon={<DollarOutlined />}>Finance</Menu.Item>
        <Menu.Item key="5" icon={<BulbOutlined />}>Science</Menu.Item>
        <Menu.Item key="4" icon={<HomeOutlined />} onClick={() => newsWorldCheck()}>World</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<HomeOutlined />} title="UK">
            <Menu.Item key="1" icon={<ThunderboltOutlined />} onClick={() =>weatherCheck('London','UK')}>Weather</Menu.Item>
            <Menu.Item key="2" icon={<ReadOutlined />} onClick={()=> newsCheck('gb')}>News</Menu.Item>
            <Menu.Item key="3" icon={<SkinOutlined />}>Sport</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" icon={<HomeOutlined />} title="Poland">
            <Menu.Item key="5" icon={<ThunderboltOutlined />} onClick={() =>weatherCheck('Warsaw','Pl')}>Weather</Menu.Item>
            <Menu.Item key="6" icon={<ReadOutlined />} onClick={()=> newsCheck('pl')}>News</Menu.Item>
            <Menu.Item key="7" icon={<SkinOutlined />}>Sport</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider> 
          {weather &&
            <div style={{position: 'relative'}}>
            <Weather data={weather}/>
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
          <News news={news}/>
          }   
        
        {world && 
          <World world={world}/>
        }
    </Layout>
  </Layout>, 
    </div>
  );
}

export default App;
