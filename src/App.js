import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { HomeOutlined, DollarOutlined, BulbOutlined, ReadOutlined, ThunderboltOutlined, SkinOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <img alt='logo' src='/image/world.png' className="logo-img"/>
        <Menu.Item key="1" icon={<ReadOutlined />}>News</Menu.Item>
        <Menu.Item key="2" icon={<ThunderboltOutlined />}>Weather</Menu.Item>
        <Menu.Item key="3" icon={<DollarOutlined />}>Finance</Menu.Item>
        <Menu.Item key="4" icon={<SkinOutlined />}>Sport</Menu.Item>
        <Menu.Item key="5" icon={<BulbOutlined />}>Science</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<HomeOutlined />} title="UK">
            <Menu.Item key="1" icon={<ThunderboltOutlined />}>Weather</Menu.Item>
            <Menu.Item key="2" icon={<ReadOutlined />}>News</Menu.Item>
            <Menu.Item key="3" icon={<SkinOutlined />}>Sport</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<HomeOutlined />} title="Poland">
            <Menu.Item key="5" icon={<ThunderboltOutlined />}>Weather</Menu.Item>
            <Menu.Item key="6" icon={<ReadOutlined />}>News</Menu.Item>
            <Menu.Item key="7" icon={<SkinOutlined />}>Sport</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<HomeOutlined/>} title="World">
            <Menu.Item key="9" icon={<ThunderboltOutlined />}>Weather</Menu.Item>
            <Menu.Item key="10" icon={<ReadOutlined />}>News</Menu.Item>
            <Menu.Item key="11" icon={<SkinOutlined />}>Sport</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>,
    </div>
  );
}

export default App;
