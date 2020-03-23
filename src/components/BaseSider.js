import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Icon, { ClockCircleOutlined } from '@ant-design/icons'
import { TVSvg } from '../TVSvg'

const { Sider } = Layout
const TVIcon = props => <Icon component={TVSvg} {...props} />

export default function BaseSider() {
  const [collapsed, setCollapsed] = useState(true)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Link to="/">
          <Menu.Item key="1">
            <ClockCircleOutlined /> <span>Quaratine Clock</span>
          </Menu.Item>
        </Link>
        <Link to="/tvreview">
          <Menu.Item key="1">
            <TVIcon /> <span>TV Reviews</span>
          </Menu.Item>
        </Link>
      </Menu>
    </Sider>
  )
}
