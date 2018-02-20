import { combineReducers } from 'redux';
import adding from './adding';
import updating from './updating';

export default combineReducers({
  adding,
  updating
})
