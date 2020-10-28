import React, { useState, useEffect } from 'react';

import { Card, AutoComplete } from 'antd';

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './finance.css'

// ant design
const { Meta } = Card;

function Company() {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    const [stock, setStock] = useState([]);
    const [close, setClose] = useState([]);
    const [chartOptions, setChartOptions] = useState(createChartOptions());


    useEffect(() => {
        for (let i = 0; i < stock.length; i++) {
            if (stock[i].value === value) {
                fetch(`http://127.0.0.1:5000//stock/${stock[i].symbol}`, {
                    method: 'get',
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(response => response.json())
                    .then(data => {
                        const timeseries = data['Time Series (Daily)']
                        console.log(timeseries)
                        setClose(Object.keys(timeseries).map(key => [Date.parse(key), parseFloat(timeseries[key]['4. close'])]));
                    })
                    .catch(error => console.log(error))
                break
            }
        }
    }, [value])


    useEffect(() => setChartOptions(createChartOptions()), [close])

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
    function createChartOptions() {
        return {
            xAxis: {
                type: 'datetime',
            },
            yAxis: {
                title: { text: 'Close price [$]' }
            },
            series: [
                { data: close, name: 'close' }
            ],
            title: { text: "Close price history" },
        }
    }

    return (
        <div className="company-container">
            <div><h1>Check information about companies market data</h1><p>For example: Walt Disney, Microsoft, etc</p></div>
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
            <div>{close.length > 0 &&
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />}
            </div>
        </div>
    )
}

export default Company
