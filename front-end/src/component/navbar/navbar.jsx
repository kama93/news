import React from 'react';

// ant design
import { Layout, Menu, Dropdown, Card } from 'antd';
import { HomeOutlined, DollarOutlined, BulbOutlined, ReadOutlined, ThunderboltOutlined, SkinOutlined } from '@ant-design/icons';

const { Header } = Layout;



function NavBar({ scienceCheck, currency, sportCheck, newsWorldCheck, weatherCheck, newsCheck }) {
    const menuUK = (
        <Menu>
            <Menu.Item key="1" icon={<ThunderboltOutlined />} onClick={() => weatherCheck('London', 'UK')}>Weather</Menu.Item>
            <Menu.Item key="2" icon={<ReadOutlined />} onClick={() => newsCheck('gb')}>News</Menu.Item>
            <Menu.Item key="3" icon={<SkinOutlined />} onClick={() => sportCheck()}>Sport</Menu.Item>
        </Menu>
    );
    const menuPL = (
        <Menu>
            <Menu.Item key="5" icon={<ThunderboltOutlined />} onClick={() => weatherCheck('Warsaw', 'Pl')}>Weather</Menu.Item>
            <Menu.Item key="6" icon={<ReadOutlined />} onClick={() => newsCheck('pl')}>News</Menu.Item>
            <Menu.Item key="7" icon={<SkinOutlined />} onClick={() => sportCheck()}>Sport</Menu.Item>
        </Menu>
    );

    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <img alt='logo' src='/image/world.png' className="logo-img" />
                <Menu.Item key="3" icon={<DollarOutlined />} onClick={() => currency()}>Finance</Menu.Item>
                <Menu.Item key="5" icon={<BulbOutlined />} onClick={() => scienceCheck()}>Science</Menu.Item>
                <Menu.Item key="4" icon={<HomeOutlined />} onClick={() => newsWorldCheck()}>World</Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} ><Dropdown overlay={menuUK} icon={<HomeOutlined />}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>UK</a>
                </Dropdown></Menu.Item>
                <Menu.Item key="1" icon={<HomeOutlined />} ><Dropdown overlay={menuPL} icon={<HomeOutlined />}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Poland</a>
                </Dropdown></Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavBar
