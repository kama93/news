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
      {world &&
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
        </div>}
    </div>
  )
}

export default World
