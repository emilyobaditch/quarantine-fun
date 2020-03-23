import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import Countup from './components/Countup'

const { Header, Content, Footer, Sider } = Layout

export default function Home() {
  const [collapsed, setCollapsed] = useState(true)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <ClockCircleOutlined /> <span>Option 1</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Countup />
        </Content>
        <Footer style={{ textAlign: 'center' }}>WHEN WILL THIS END</Footer>
      </Layout>
    </Layout>
  )
}
