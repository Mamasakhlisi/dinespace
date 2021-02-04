import { INCREMENT, DECREMENT } from "../actionTypes";
const initialState = {
  counter: 0,
};

export const groupSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return state.counter <= 0
        ? state
        : { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
