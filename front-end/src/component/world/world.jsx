import React from 'react';

import { Card } from 'antd';

import './world.css'

// ant design
const { Meta } = Card;

function World ({world}) {
    return(

<div className='world-container'>
          {world.map((info, i) => (
            <div id={`card${i}`} className="card-world" key={i}>
            <a href={`${info.url}`}>
           <Card
            hoverable
            cover={<img alt="article image" src={`${info.urlToImage}`}/>}
          >
            <Meta title={info.title} description={info.description}/>
          </Card> </a>
          </div>))}
          </div>
           )
        }
        
        export default World
        