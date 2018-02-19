import * as types from './ActionTypes';

export const handleAddList = (keyword) => {
  return {
    type: types.ADD_LIST,
    keyword: keyword
  }
}
