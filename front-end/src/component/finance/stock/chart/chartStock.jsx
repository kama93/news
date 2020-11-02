import React, { useState, useEffect } from 'react';

// highcharts
import Highcharts, { chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function StockChart({chartStock}) {
    const [close, setClose] = useState([]);
    const [chartOptions, setChartOptions] = useState(createChartOptions());


    useEffect(() => {
        if (!chartStock) {
            return
        }

        setClose(chartStock.map(x => [x.date, x.stock]));
    }, [chartStock])

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
        <div>
            <HighchartsReact
                containerProps={{ style: { width: "80%" } }}
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    )
}

export default StockChart
