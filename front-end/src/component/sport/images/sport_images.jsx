import React from 'react';

import './sport_images.css'

function SportImages({newsSport}) {
    return (
        <div className="sport">
            <div className="sport-picture-container">
                <img alt='football' src='/image/football.jpg' className='sport-images' onClick={() => newsSport('football')} />
                <img alt='tennis' src='/image/tennis.jpg' className='sport-images' onClick={() => newsSport('tennis')} />
                <img alt='volleyball' src='/image/valleyball.jpg' className='sport-images' onClick={() => newsSport('volleyball')} />
                <img alt='basketball' src='/image/basketball.jpg' className='sport-images' onClick={() => newsSport('basketball')} />
            </div>
        </div>
    )
}

export default SportImages