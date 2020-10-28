import React from 'react';

import { Card, Col, Row } from 'antd';

import './currency.css'

function Currency ({curren}) {
    return(
        <div className="site-card-wrapper currency-container">
        {curren.map(curr =>
          <Row >
            <Col >
              <Card className="currency-box" title={`${curr['Realtime Currency Exchange Rate']['2. From_Currency Name']} to ${curr['Realtime Currency Exchange Rate']['4. To_Currency Name']}`} bordered={true}>
                <p>{`Bid price: ${curr['Realtime Currency Exchange Rate']['8. Bid Price']}`}</p>
                <p>{`Ask price: ${curr['Realtime Currency Exchange Rate']['9. Ask Price']}`}</p>
                <p>{`Update price: ${curr['Realtime Currency Exchange Rate']['6. Last Refreshed']}`}</p>
              </Card>
            </Col>
          </Row>)}
        </div>
        
    )
}

export default Currency