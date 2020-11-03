import React from 'react';

import { Card } from 'antd';

import './sport_news.css'

// ant design
const { Meta } = Card;

function SportNews({ location }) {
    // getting data through useHistory, so location feature use to get data
    let infoSport = location.state.infoSport

    return (
        <div>
            <div className='sport-news-container'>
                {infoSport && infoSport.map((info, i) => (
                    <a href={`${info.url}`} target="_blank" rel="noopener noreferrer">
                        <div key={i}>
                            <Card
                                hoverable
                                cover={<img alt="article" src={`${info.urlToImage}`} />}
                            >
                                <Meta title={info.title} description={info.description} />
                            </Card></div> </a>))}
            </div>
        </div>
    )
}

export default SportNews
