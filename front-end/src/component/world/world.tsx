import React, { useState, useEffect } from 'react';

import { Card } from 'antd';

import './world.css'

// ant design
const { Meta } = Card;

function World() {
  const [world, setWorld] = React.useState<any[]>([]);

  // fetching world news from API
  useEffect(() => {
    fetch(`/api/world`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setWorld(data.articles))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      {world ?
        <div className='world-container'>
          {world.map((info, i) => (
            <div id={`card${i}`} className="card-world" key={i}>
              <a href={`${info.url}`} target="_blank" rel="noopener noreferrer">
                <Card
                  hoverable
                  cover={<img alt="article" src={`${info.urlToImage}`} />}
                >
                  <Meta title={info.title} description={info.description} />
                </Card> </a>
            </div>))}
        </div> :
        <div className="divLoader">
          <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
            <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)">
              <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51"
                keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
            </path>
          </svg>
        </div>
      }
    </div>
  )
}

export default World
