import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './sport_images.css'

function SportImages() {
  const history = useHistory();
  let [infoSport, setInfoSport] = useState([]);

  const newsSport = (sport) => {
    fetch(`http://127.0.0.1:5000//sport/${sport}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => setInfoSport(data.articles))
      .catch(error => console.log(error))
    // setTimeout(() => setLoad(false), 1500)
  }

  useEffect(() => {
    if (infoSport && infoSport.length == 0) {
      return
    }

     history.push('/sport/news', {infoSport})
  }, [infoSport]);
  
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