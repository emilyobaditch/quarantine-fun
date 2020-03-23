import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Progress } from 'antd'
import isEmpty from 'lodash/isEmpty'
import { getCountUpValues } from '../../utils/time'

const { Title } = Typography
const createTimeArray = ({ currTime }) => {
  if (isEmpty(currTime)) {
    return []
  }
  return [
    { label: 'WEEK', num: Math.floor(currTime.days / 7), interval: 52 },
    { label: 'DAY', num: currTime.days % 7, interval: 7 },
    { label: 'HOUR', num: currTime.hours, interval: 24 },
    { label: 'MINUTE', num: currTime.minutes, interval: 60 },
    { label: 'SECOND', num: currTime.seconds, interval: 60 },
  ]
}

export default function Countup() {
  const [time, setTime] = useState(createTimeArray({ currTime: getCountUpValues() }))
  const isPlural = num => {
    return num > 1
  }

  const timeoutHandler = setTimeout(() => {
    const currTime = getCountUpValues()
    setTime(createTimeArray({ currTime }))
  }, [1000])

  useEffect(() => {
    return () => clearTimeout(timeoutHandler)
  }, [timeoutHandler])
  return (
    <div style={{ paddingTop: '24px' }}>
      <Row gutter={[0, 40]} justify="center">
        <Col span={24}>
          <Title align="center" level={1}>
            I entered quarantine:
          </Title>
        </Col>
      </Row>
      <Row gutter={[0, 40]} align="middle" justify="center">
        {time.map((val, idx) => {
          return (
            <Col
              key={idx}
              xs={{ span: 24, offset: 5 }}
              sm={{ span: 8, offset: idx === 0 ? 4 : 0 }}
              md={{ span: 8, offset: idx === 0 ? 4 : 0 }}
              lg={{ span: 4, offset: idx === 0 ? 2 : 0 }}
              xl={{ span: 4, offset: idx === 0 ? 2 : 0 }}
            >
              <Progress
                width="150px"
                type="circle"
                percent={(val.num / val.interval) * 100}
                format={percent =>
                  `${Math.ceil((percent / 100) * val.interval)} ${val.label}${
                    isPlural(val.num) ? 'S' : ''
                  }`
                }
              />
            </Col>
          )
        })}
      </Row>
      <Row gutter={[0, 40]}>
        <Col span={24}>
          <Title align="center" level={1}>
            ago...
          </Title>
        </Col>
      </Row>
    </div>
  )
}
