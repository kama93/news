import React from 'react';

import { Link } from "react-router-dom";

// ant design
import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, DollarOutlined, BulbOutlined, ReadOutlined, ThunderboltOutlined, SkinOutlined } from '@ant-design/icons';

const { Header } = Layout;

function NavBar() {

    // small lists for UK and Poland items
    const menuUK = (
        <Menu>
            <Menu.Item key="1" icon={<ThunderboltOutlined />}><Link to="/weather/UK/London" >Weather</Link></Menu.Item>
            <Menu.Item key="2" icon={<ReadOutlined />}><Link to="/news/gb" >News</Link></Menu.Item>
            <Menu.Item key="3" icon={<SkinOutlined />}><Link to="/sport" >Sport</Link></Menu.Item>
        </Menu>
    );
    const menuPL = (
        <Menu>
            <Menu.Item key="5" icon={<ThunderboltOutlined />}><Link to="/weather/PL/Warsaw" >Weather</Link></Menu.Item>
            <Menu.Item key="6" icon={<ReadOutlined />}><Link to="/news/PL" >News</Link></Menu.Item>
            <Menu.Item key="7" icon={<SkinOutlined />}><Link to="/sport" >Sport</Link></Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Link to="/" ><img alt='logo' src='/image/world.png' className="logo-img" /></Link>
                    <Menu.Item key="3" icon={<DollarOutlined />}><Link to="/finance" >Finance</Link></Menu.Item>
                    <Menu.Item key="5" icon={<BulbOutlined />}><Link to="/science">Science</Link></Menu.Item>
                    <Menu.Item key="4" icon={<HomeOutlined />}><Link to="/world">World</Link></Menu.Item>
                    <Menu.Item key="2" icon={<HomeOutlined />} ><Dropdown overlay={menuUK} icon={<HomeOutlined />}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>UK</a>
                    </Dropdown></Menu.Item>
                    <Menu.Item key="1" icon={<HomeOutlined />} ><Dropdown overlay={menuPL} icon={<HomeOutlined />}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Poland</a>
                    </Dropdown></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}

export default NavBar
