import React, { useState, useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import { getCountUpValues } from '../../utils/time'

const { Title } = Typography
export default function Countup() {
  const [time, setTime] = useState({})
  const isPlural = num => {
    return num > 1
  }
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      const currTime = getCountUpValues()
      setTime(currTime)
    }, [1000])
    return () => clearTimeout(timeoutHandler)
  }, [setTime])
  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <Title align="center" level={1}>
            I entered quarantine:
          </Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col offset={2} span={4}>
          <Title align="center" level={2}>
            {Math.floor(time.days / 7)}
          </Title>
          <Title align="center" level={3}>
            WEEK
          </Title>
        </Col>
        <Col span={4}>
          <Title align="center" level={2}>
            {time.days % 7}
          </Title>
          <Title align="center" level={3}>
            {`DAY${isPlural(time.days % 7) ? 'S' : ''}`}
          </Title>
        </Col>
        <Col span={4}>
          <Title align="center" level={2}>
            {time.hours}
          </Title>
          <Title align="center" level={3}>
            {`HOUR${isPlural(time.hours) ? 'S' : ''}`}
          </Title>
        </Col>
        <Col span={4}>
          <Title align="center" level={2}>
            {time.minutes}
          </Title>
          <Title align="center" level={3}>
            {`MINUTE${isPlural(time.minutes) ? 'S' : ''}`}
          </Title>
        </Col>
        <Col span={4}>
          <Title align="center" level={2}>
            {time.seconds}
          </Title>
          <Title align="center" level={3}>
            {`SECOND${isPlural(time.seconds) ? 'S' : ''}`}
          </Title>
        </Col>
      </Row>
    </div>
  )
}
