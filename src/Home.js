import React from 'react'
import { Layout } from 'antd'
import BaseSider from './components/BaseSider'
import Countup from './components/Countup'

const { Header, Content, Footer } = Layout
export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BaseSider />
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
