import React from 'react';

import { Card, Col, Row, Carousel } from 'antd';

function Stock ({companies}) {
    return(
        <div className="site-card-wrapper">
        <Carousel autoplay>
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Apple Inc.(AAPL)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['AAPL'] - companies[companies.length - 2]['AAPL']) / companies[companies.length - 2]['AAPL'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="SPDR S&P 500 ETF Trust (SPY)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['SPY'] - companies[companies.length - 2]['SPY']) / companies[companies.length - 2]['SPY'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Microsoft Corporation (MSFT)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['MSFT'] - companies[companies.length - 2]['MSFT']) / companies[companies.length - 2]['MSFT'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="The Walt Disney Company (DIS)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['DIS'] - companies[companies.length - 2]['DIS']) / companies[companies.length - 2]['DIS'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Alphabet Inc. (GOOGL)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['GOOGL'] - companies[companies.length - 2]['GOOGL']) / companies[companies.length - 2]['GOOGL'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="BP p.l.c. (BP)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['BP'] - companies[companies.length - 2]['BP']) / companies[companies.length - 2]['BP'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="The Coca-Cola Company (KO)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['KO'] - companies[companies.length - 2]['KO']) / companies[companies.length - 2]['KO'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Facebook, Inc. (FB)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['FB'] - companies[companies.length - 2]['FB']) / companies[companies.length - 2]['FB'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Walmart Inc. (WMT)" bordered={false}>
                            <h2>Return</h2>
                            <h3>{((companies[companies.length - 1]['WMT'] - companies[companies.length - 2]['WMT']) / companies[companies.length - 2]['WMT'] * 100).toFixed(2)}%</h3>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Carousel>
        </div>
    )
}

export default Stock


