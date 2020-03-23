import React from 'react'
import { List, Avatar, Typography } from 'antd'

import data from '../../data'

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
    <div style={{ paddingTop: '24px' }}>
      <Title align="center" level={1}>
        TV Reviews from yours truly
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
  )
}
