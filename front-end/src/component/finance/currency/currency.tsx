import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';

import './currency.css'


function Currency() {
  const [ccy, setCcy] = React.useState([]);

  // fetch for currency info
  useEffect(() => {
    let currencies = [
      { from: "USD", to: "GBP" },
      { from: "USD", to: "PLN" },
      { from: "USD", to: "EUR" }]
    Promise.all(currencies.map(x => fetch(`http://127.0.0.1:5000/currency/${x.from}/${x.to}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })))
      .then(response => Promise.all(response.map(x => x.json())))
      .then((data: any) => setCcy(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      {ccy &&
        <div className="site-card-wrapper currency-container">
          {ccy.map(curr =>
            <Row >
              <Col >
                <Card className="currency-box" title={`${curr['Realtime Currency Exchange Rate']['2. From_Currency Name']} to ${curr['Realtime Currency Exchange Rate']['4. To_Currency Name']}`} bordered={true}>
                  <p className="currency-price">{`Bid price: ${curr['Realtime Currency Exchange Rate']['8. Bid Price']}`}</p>
                  <p className="currency-price">{`Ask price: ${curr['Realtime Currency Exchange Rate']['9. Ask Price']}`}</p>
                  <p className="currency-price">{`Update price: ${curr['Realtime Currency Exchange Rate']['6. Last Refreshed']}`}</p>
                </Card>
              </Col>
            </Row>)}
        </div>}
    </div>

  )
}

export default Currency