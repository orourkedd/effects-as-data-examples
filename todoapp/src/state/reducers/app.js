import * as constants from "../constants";

const initialState = {
  filter: null
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case constants.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}
