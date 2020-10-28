import React from 'react';

import { Card } from 'antd';

import './science.css'

// ant design
const { Meta } = Card;

function Science({ science }) {
    return (
        <div className='science-container'>
        <div className="card-science" key={0}>
                <h1 className="title-science">Check today's 7 news from science world (from Nature.com)</h1>
            </div>
          {science.map((info, i) => (
            <div className="card-science" key={++i}>
              <a href={`${info.link}`} target="_blank">
                <Card
                  hoverable
                  cover={<img alt="article image" src={`${info.img}`} />}
                >
                  <Meta title={info.title} description={info.description} />
                </Card> </a>
            </div>))}
        </div>
    )
}

export default Science
