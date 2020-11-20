import React, { useState, useEffect } from 'react';

import './chart-stock.css'

// highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



function StockChart({ chartStock }) {
    const [close, setClose] = useState([]);
    const [chartOptions, setChartOptions] = useState(createChartOptions());

    // creating data for small charts about history stock data
    useEffect(() => {
        if (!chartStock) {
            return
        }
        setClose(chartStock.map(x => [x.date, x.stock]));
    }, [chartStock])

    useEffect(() => setChartOptions(createChartOptions()), [close])

    function createChartOptions() {
        return {
            title: {
                text: null
            },
            xAxis: {
                type: 'datetime',
                visible: false,
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: null
                },
                visible: false,
            },
            series: [
                { data: close }
            ],
            credits: {
                enabled: false
              },
        }
    }

    return (
        <div className="chart-stock-wrapper">
            <HighchartsReact
                containerProps={{ style: { width: "100%", height: "100%" } }}
                highcharts={Highcharts}
                options={chartOptions}
            />

        </div>
    )
}

export default StockChart
