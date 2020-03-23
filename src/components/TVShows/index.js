import React from 'react'
import { Layout, List, Avatar, Typography } from 'antd'

import data from '../../data'

import BaseSider from '../BaseSider'

const { Header, Content, Footer } = Layout

const { Title } = Typography
const tvData = data.tv
const getAvatarName = grade => {
  switch (grade) {
    case 'A+':
      return 'icons/a-plus.png'
    case 'A-':
      return 'icons/a-minus.png'
    case 'B+':
    default:
      return 'icons/b-plus.png'
  }
}
export default function TVShow() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BaseSider />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div>
            <Title align="center" level={1}>
              TV Shows I have watched:
            </Title>
            <List
              itemLayout="horizontal"
              dataSource={tvData}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={getAvatarName(item.grade)} />}
                    title={item.name}
                    description={item.commentary}
                  />
                </List.Item>
              )}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>WHEN WILL THIS END</Footer>
      </Layout>
    </Layout>
  )
}
