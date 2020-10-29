import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

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

// ant design
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [load, setLoad] = useState(false);
  const [curren, setCurren] = useState();
  const [science, setScience] = useState();
  const [companies, setCompanies] = useState([]);

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


  useEffect(() => {
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
  }, [])


  return (
    <div className="App">
      <NavBar/>
        <Layout>
          <Switch>
            <Route exact path='/' render={() => (
              <div>
                <Banner />
                <World />
              </div>
            )} />
            <Route exact path='/finance' component={() => <Finance curren={curren} companies={companies}/>} />
            <Route exact path='/world' component={World} />
            <Route exact exact path='/science' component={() => <Science science={science} />} />
            <Route exact path='/weather/:country/:city' component={Weather} />
            <Route exact path='/news/:country' component={News} />
            <Route exact path='/sport' component={SportImages} />
            <Route exact path='/sport/news' component={SportNews} />
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
