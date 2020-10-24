import React from 'react';

import { Card } from 'antd';

import './sport_news.css'

// ant design
const { Meta } = Card;

function SportNews({ infoSport }) {
    return (
        <div className='sport-news-container'>
            {infoSport.map((info, i) => (
                <a href={`${info.url}`} target="_blank">
                    <div key={i}>
                        <Card
                            hoverable
                            cover={<img alt="article image" src={`${info.urlToImage}`} />}
                        >
                            <Meta title={info.title} description={info.description} />
                        </Card></div> </a>))}
        </div>
    )
}

export default SportNews
