import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import Icon, { ClockCircleOutlined } from '@ant-design/icons'
import { TVSvg } from './TVSvg'
import Countup from './components/Countup'
import TVShow from './components/TVShows'

const { Header, Content, Footer, Sider } = Layout

const TVIcon = props => <Icon component={TVSvg} {...props} />

export default function Home() {
  const [collapsed, setCollapsed] = useState(true)
  const [menuItem, setMenuItem] = useState('counter')
  const onCollapse = () => {
    setCollapsed(!collapsed)
  }
  const handleMenuClick = item => {
    setMenuItem(item.key)
  }

  const ContentComponent = () => {
    switch (menuItem) {
      case 'tv':
        return <TVShow />
      case 'counter':
      default:
        return <Countup />
    }
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu onClick={handleMenuClick} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="counter">
            <ClockCircleOutlined /> <span>Counter</span>
          </Menu.Item>
          <Menu.Item key="tv">
            <TVIcon /> <span>TV Reviews</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <ContentComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>WHEN WILL THIS END</Footer>
      </Layout>
    </Layout>
  )
}
