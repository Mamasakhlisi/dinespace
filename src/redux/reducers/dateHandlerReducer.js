import {SET_DATE,SET_TIME} from '../actionTypes'
import moment from 'moment'
const initialState = {
    date: moment(),
    time: null
  };

  export const dateHandlerReducer = (state = initialState, action) => {
    const {date, time} = action;
    switch (action.type) {
      case SET_DATE:
        return { ...state, date: date };
      case SET_TIME: 
        return {...state, time: time }
      default:
        return state;
    }
  };
  