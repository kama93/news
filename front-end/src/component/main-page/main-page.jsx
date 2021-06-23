import React, { useState, useEffect } from 'react';

import World from '../world/world';

import './main-page.css'

function MainPage() {

    return (
        <div>
            <h1 className='pagemain-title'>News</h1>
            <World />
        </div>
    )
}

export default MainPage