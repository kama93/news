import React, { useState, useEffect } from 'react';

import Banner from './banner/banner';
import Welcome from './welcome/welcome';
import World from '../world/world';

import './main-page.css'

function MainPage() {
    const [welcomePage, setWelcomePage] = useState(false)
    const [classChange, setClassChange] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setClassChange(true)
            setTimeout(() => {
                setWelcomePage(true)
            }, 800);
        }, 1000);
      }, [])

    return (
        <div>
                <div className={classChange ? 'roll-out-blurred-bottom' : ''} style={ { display: welcomePage ? 'none' : 'block' } } >
                <Welcome/>
                </div>
                {welcomePage &&
                <div>
                    <Banner />
                    <World />
                </div>}
        </div>
    )
}

export default MainPage