import { combineReducers } from "redux";

const addTaskReducer = (tasks = [], action) => {
  if (action.type === "ADD_TASK") {
    return [...tasks, action.payload];
  }
  return tasks;
};

export default combineReducers({ tasks: addTaskReducer });
