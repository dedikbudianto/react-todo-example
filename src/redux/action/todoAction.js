import * as types from './ActionTypes';

export const handleAddList = keyword => {
  return {
    type: types.ADD_LIST,
    keyword: keyword
  }
}

export const updateKeyword = keyword => {
  return {
    type: types.UPDATE_KEYWORD,
    keyword: keyword
  }
}

export const updateShowType = showType => {
  return {
    type: types.UPDATE_SHOW_TYPE,
    showType: showType
  }
}
