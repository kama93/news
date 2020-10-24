import React from 'react';

import { Card } from 'antd';

import './news.css'

// ant design
const { Meta } = Card;

function News ({news}) {
    return(
        <div className='news-container'>
          {news.map((info, i) => (
            <a href={`${info.url}`} target="_blank">
              <div key={i}>
           <Card
            hoverable
            cover={<img alt="article image" src={`${info.urlToImage}`}/>}
          >
            <Meta title={info.title} description={info.description}/>
          </Card></div> </a>))}
          </div>
        
    )
}

export default News
