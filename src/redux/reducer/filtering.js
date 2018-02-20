import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../action/ActionTypes';

const initialState = {
  list: [
    { id: 1, content: "eating breakfast ⏰", status: "completed" },
    { id: 2, content: "eating lunch ⏰", status: "incompleted" },
    { id: 3, content: "eating dinner ⏰", status: "incompleted" }
  ]
}
