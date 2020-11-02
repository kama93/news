import React, { useState } from 'react';
import Chart from './chart/chart'

import { AutoComplete } from 'antd';
import './company.css'


function Company() {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    const [stock, setStock] = useState([]);

    const onSearch = (searchText) => {
        setValue(searchText)
        fetch(`http://127.0.0.1:5000/company/${searchText}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setOptions(data.bestMatches.map(value => ({ value: value['2. name'] })))
                setStock(data.bestMatches.map(value =>
                    ({ value: value['2. name'], symbol: value['1. symbol'] })
                ))
            })
    };

    const onSelect = (data) => {
        setValue(data)
    };

    return (
        <div className="company-container">
            <div><h1 className="company-name">Check information about companies market data</h1><p className='company-examples'>For example: Walt Disney, Microsoft, etc</p></div>
            <AutoComplete
                value={value}
                options={options}
                style={{
                    width: 300,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="Start type here"
            />
            <Chart stock={stock} value={value} />
        </div>
    )
}

export default Company
