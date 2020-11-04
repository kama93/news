import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import './sport_images.css'

function SportImages() {
  const history = useHistory();
  let [infoSport, setInfoSport] = React.useState([]);

  // fetch for sport news- 4 options-football, tennis, volleyball, basketball- depends which photo client click
  const newsSport = (sport: string) => {
    fetch(`http://127.0.0.1:5000//sport/${sport}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setInfoSport(data.articles))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (infoSport && infoSport.length === 0) {
      return
    }
     history.push('/sport/news', {infoSport})
  }, [infoSport]);
  
    return (
        <div className="sport">
            <div className="sport-picture-container">
                <img alt='football' src='/image/football.png' className='sport-images' onClick={() => newsSport('football')} />
                <img alt='tennis' src='/image/tennis.png' className='sport-images' onClick={() => newsSport('tennis')} />
                <img alt='volleyball' src='/image/valleyball.png' className='sport-images' onClick={() => newsSport('volleyball')} />
                <img alt='basketball' src='/image/basketball.png' className='sport-images' onClick={() => newsSport('basketball')} />
            </div>
        </div>
    )
}

export default SportImages