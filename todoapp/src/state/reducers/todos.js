import * as constants from "../constants";

const initialState = [];

export default function todos(state = initialState, action = {}) {
  switch (action.type) {
    case constants.SET_TODOS:
      return action.payload;

    case constants.ADD_TODO:
      return [...state, action.payload];

    case constants.UPDATE_TODO:
      return state.map(t => {
        if (t.timestamp === action.payload.timestamp) return action.payload;
        else return t;
      });

    case constants.DELETE_TODO:
      return state.filter(t => t.timestamp !== action.payload.timestamp);

    case constants.MARK_ALL_TODOS_COMPLETE:
      return state.map(t => {
        return {
          ...t,
          complete: true
        };
      });

    case constants.MARK_ALL_TODOS_ACTIVE:
      return state.map(t => {
        return {
          ...t,
          complete: false
        };
      });

    default:
      return state;
  }
}
