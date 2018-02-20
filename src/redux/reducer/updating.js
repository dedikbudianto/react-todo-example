import { UPDATE_KEYWORD, UPDATE_SHOW_TYPE } from '../action/ActionTypes';

const initialState = {
  keyword: '',
  showType: 'all'
}

export default function updating(state = initialState, action) {
  switch(action.type) {
    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }
    case UPDATE_SHOW_TYPE:
      return {
        ...state,
        showType: action.showType
      }
    default:
      return state
  }
}
