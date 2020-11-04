import * as React from "react";
import Chart from './chart/chart'
import { StockArray } from '../../../common-types'

import { AutoComplete } from 'antd';
import './company.css'


const Company: React.FC = () => {
    const [value, setValue] = React.useState('');
    const [options, setOptions] = React.useState<{ value: string }[]>([]);
    const [stock, setStock] = React.useState<StockArray[]>([]);
    const [load, setLoad] = React.useState(false);


    // autocomplete; sending fetch for individual phrases

    const onSearch = (searchText: string) => {
        setLoad(true);
        setValue(searchText)
        fetch(`http://127.0.0.1:5000/company/${searchText}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setOptions(data.bestMatches.map((value: { [x: string]: any; }) => ({ value: value['2. name'] })))
                setStock(data.bestMatches.map((value: { [x: string]: any; }) =>
                    ({ value: value['2. name'], symbol: value['1. symbol'] })
                ))
            })
    };

    const onSelect = (data:string) => {
        setValue(data);
        setTimeout(() => setLoad(false), 1000);
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
            <div>
                {load &&
                    <div className="divLoader">
                        <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
                            <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
                        </svg>
                    </div>}
                {value &&
                    <Chart stock={stock} value={value} />
                }
            </div>
        </div>
    )
}

export default Company
