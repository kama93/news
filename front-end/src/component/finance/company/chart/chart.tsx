import React, { useEffect } from 'react';
import {StockArray} from '../../../../common-types'
import './chart.css'

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Chart( {value, stock}: {value: string, stock: StockArray[]}) {
    const [close, setClose] = React.useState<number[][]>([]);
    const [chartOptions, setChartOptions] = React.useState(createChartOptions());


    // creating data for chart, depending on autocomplete company choice
    useEffect(() => {
        for (let i = 0; i < stock.length; i++) {
            if (stock[i].value === value) {
                fetch(`/api/stock/${stock[i].symbol}`, {
                    method: 'get',
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(response => response.json())
                    .then(data => {
                        const timeseries: any = data['Time Series (Daily)']
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
            credits: {
                enabled: false
              },
        }
    }

    return (
        <div className="chart-wrapper">{close.length > 0 &&
            <HighchartsReact
                containerProps={{ style: { width: "90%" } }}
                highcharts={Highcharts}
                options={chartOptions}
            />}
        </div>
    )
}

export default Chart
