import { combineReducers } from 'redux'
import { TODO_ADD_ITEM, TODO_REMOVE_ITEM, TODO_RESET } from './constants'

export const initialState = {
  todo: {
    items: [],
  },
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD_ITEM:
      return {
        ...state,
        items: [
          {
            details: action.details,
            id:
              state.items && state.items.length > 0
                ? state.items[state.items.length - 1].id + 1
                : 0,
            label: action.label,
          },
          ...state?.items,
        ],
      }

    case TODO_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      }
    case TODO_RESET:
      return {
        ...state,
        items: [],
      }
    default:
      return { ...state }
  }
}

export const appStore = combineReducers({ todo })
