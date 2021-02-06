import {SET_TIME} from '../actionTypes'

const initialState = {
    time: null
  };

  export const timeHandlerReducer = (state = initialState, action) => {
    const {time} = action;
    switch (action.type) {
      case SET_TIME: 
        return {...state, time: time }
      default:
        return state;
    }
  };
  