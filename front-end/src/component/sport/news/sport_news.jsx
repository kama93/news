import React from 'react';

import { Card } from 'antd';

import './sport_news.css'

// ant design
const { Meta } = Card;

function SportNews({ location }) {
    console.log(location)
    let infoSport = location.state.infoSport

    return (
        <div>
                <div className='sport-news-container'>
                    {infoSport && infoSport.map((info, i) => (
                        <a href={`${info.url}`} target="_blank">
                            <div key={i}>
                                <Card
                                    hoverable
                                    cover={<img alt="article image" src={`${info.urlToImage}`} />}
                                >
                                    <Meta title={info.title} description={info.description} />
                                </Card></div> </a>))}
                </div>
        </div>
    )
}

export default SportNews
