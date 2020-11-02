import React, { useState, useEffect } from 'react';
import './chart.css'

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function Chart({ stock, value }) {
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
        <div className="chart-wrapper">{close.length > 0 &&
            <HighchartsReact
                containerProps={{ style: { width: "100%" } }}
                highcharts={Highcharts}
                options={chartOptions}
            />}
        </div>
    )
}

export default Chart
