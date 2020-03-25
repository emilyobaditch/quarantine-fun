import React from 'react'
import { List, Avatar, Typography, Button, Row, Col } from 'antd'
import { useForm } from 'react-hook-form'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { todoAddItem, todoRemoveItem, todoReset } from '../../modules/actions'

const { Title, Text } = Typography

export default function ToDo() {
  const currList = useSelector(state => state.todo.items)
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()
  const handleDeleteClick = id => {
    dispatch(todoRemoveItem({ id }))
  }
  const onSubmit = values => {
    dispatch(todoAddItem({ ...values }))
  }
  const handleClearList = () => {
    dispatch(todoReset())
  }

  return (
    <div style={{ paddingTop: '24px' }}>
      <Title align="center" level={1}>
        Todos
      </Title>
      <List
        itemLayout="horizontal"
        locale={{ emptyText: 'Dont be lazy add some sh*t to do!' }}
        dataSource={currList}
        renderItem={item => (
          <List.Item>
            <Avatar
              style={{ marginRight: '4px' }}
              onClick={() => handleDeleteClick(item.id)}
              icon={<DeleteOutlined />}
            />
            <List.Item.Meta title={item.label} description={item.details} />
          </List.Item>
        )}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <Row gutter={[0, 20]}>
            <Col xs={24} lg={{ span: 4, offset: 1 }}>
              <input ref={register({ required: true })} name="label" placeholder="Item" />
              {errors.item && <Text>This field is required</Text>}
            </Col>
            <Col xs={24} lg={4}>
              <input ref={register} name="details" placeholder="Details" />
            </Col>
          </Row>
          <Row gutter={[0, 20]}>
            <Col xs={24} style={{ marginRight: '4px' }} lg={{ span: 2, offset: 1 }}>
              <Button htmlType="submit">Add Item</Button>
            </Col>
            <Col xs={24} lg={2}>
              <Button onClick={handleClearList} disabled={currList.length === 0}>
                Clear List
              </Button>
            </Col>
          </Row>
        </>
      </form>
    </div>
  )
}
