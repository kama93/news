import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Card } from 'antd';

import './news.css'

// ant design
const { Meta } = Card;

function News() {
  let { country } = useParams();

  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000//news/${country}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.log(error))
    // setTimeout(() => setLoad(false), 1500)
  }, [country])

  return (
    <div>
      {news &&
        <div className='news-container'>
          {news.map((info, i) => (
            <a href={`${info.url}`} target="_blank">
              <div key={i}>
                <Card
                  hoverable
                  cover={<img alt="article image" src={`${info.urlToImage}`} />}
                >
                  <Meta title={info.title} description={info.description} />
                </Card></div> </a>))}
        </div>}
    </div>
  )
}

export default News
