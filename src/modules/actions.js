import * as CONSTANTS from './constants'

export const todoAddItem = item => ({
  type: CONSTANTS.TODO_ADD_ITEM,
  ...item,
})

export const todoRemoveItem = id => ({
  type: CONSTANTS.TODO_REMOVE_ITEM,
  ...id,
})
export const todoReset = () => ({
  type: CONSTANTS.TODO_RESET,
})
