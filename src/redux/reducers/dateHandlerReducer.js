import {SET_DATE} from '../actionTypes'

const initialState = {
    date: null,
    time: null
  };

  export const dateHandlerReducer = (state = initialState, action) => {
    const {date} = action;
    switch (action.type) {
      case SET_DATE:
        return { ...state, date: date }
      default:
        return state;
    }
  };
  