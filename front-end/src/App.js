import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './component/navbar/navbar';
import Banner from './component/banner/banner'
import Weather from './component/weather/weather';
import News from './component/news/news';
import World from './component/world/world';
import Finance from './component/finance/finance-comp/finance'
import Science from './component/science/science'
import SportImages from './component/sport/images/sport_images';
import SportNews from './component/sport/news/sport_news';

// loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// ant design
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

function App() {

  // pre-fetch for science component, quicker fetching with session storage
  useEffect(() => {
    fetch(`/api/science`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => window.sessionStorage.setItem('science', JSON.stringify(data)))
      .catch(error => console.log(error))
  }, [])

  // pre-fetch for company stock info- quicker rendering
  useEffect(() => {
    fetch(`/api/yahoo`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
  }, [])

  // pre-fetch for currency exchange- small number of API calls
  useEffect(() => {
    let currencies = [
      { from: "USD", to: "GBP" },
      { from: "USD", to: "PLN" },
      { from: "USD", to: "EUR" }]
    Promise.all(currencies.map(x => fetch(`/api/currency/${x.from}/${x.to}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Layout>
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <Banner />
              <World />
            </div>
          )} />
          <Route exact path='/finance' component={Finance} />
          <Route exact path='/world' component={World} />
          <Route exact exact path='/science' component={Science} />
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
