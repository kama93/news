import React from 'react';

import { Card } from 'antd';

import './news.css'

// ant design
const { Meta } = Card;

function News ({news}) {
    return(
        <div className='news-container'>
          {news.map((info, i) => (
            <a href={`${info.url}`}>
              <div key={i}>
           <Card
            hoverable
            style={{ width: 500, height:500 }}
            cover={<img alt="article image" src={`${info.urlToImage}`}/>}
          >
            <Meta title={info.title} description={info.description}/>
          </Card></div> </a>))}
          </div>
        
    )
}

export default News
