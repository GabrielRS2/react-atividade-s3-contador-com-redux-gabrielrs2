import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + action.number

    case SUB_NUMBER:
      return state - action.number

    default:
      return state;
  }
}

export default reducerCounter;
        