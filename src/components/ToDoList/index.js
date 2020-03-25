import React from 'react'
import { List, Avatar, Typography } from 'antd'
import { useForm } from 'react-hook-form'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import * as CONSTANTS from '../../modules/constants'
import { todoAddItem, todoRemoveItem } from '../../modules/actions'

const { Title } = Typography

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

  return (
    <div style={{ paddingTop: '24px' }}>
      <Title align="center" level={1}>
        Todos
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={currList}
        renderItem={item => (
          <List.Item>
            <Avatar onClick={() => handleDeleteClick(item.id)} icon={<DeleteOutlined />} />
            <List.Item.Meta title={item.label} description={item.details} />
          </List.Item>
        )}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register({ required: true })} name="label" placeholder="Item" />
        {errors.item && <span>This field is required</span>}
        <input ref={register} name="details" placeholder="Details" />

        <input type="submit" />
      </form>
    </div>
  )
}
