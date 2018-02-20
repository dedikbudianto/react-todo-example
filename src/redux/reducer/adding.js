import { ADD_LIST } from '../action/ActionTypes';

const initialState = {
  list: [
    { id: 1, content: "eating breakfast ⏰", status: "completed" },
    { id: 2, content: "eating lunch ⏰", status: "incompleted" },
    { id: 3, content: "eating dinner ⏰", status: "incompleted" }
  ]
}

export default function adding(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        list: state.list.concat({
          id: state.list.length + 1,
          content: action.keyword + ' ⏰',
          status: 'incompleted'
        })
      }

    default:
      return state
  }
}
