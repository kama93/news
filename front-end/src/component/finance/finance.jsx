import React, { useState, useEffect } from 'react';
import Currency from './currency';
import Stock from './stock';
import Company from './company'


import './finance.css'



function Finance({companies, curren}) {
    return (
        <div>
           <Stock companies={companies}/>
            <Currency curren={curren} />
            <Company/>
        </div>
    )
}

export default Finance
