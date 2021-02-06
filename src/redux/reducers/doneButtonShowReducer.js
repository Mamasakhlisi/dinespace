import {SET_SHOW_DONE} from '../actionTypes'

const initialState = {
    active: false,
  };

export const doneButtonShowReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_SHOW_DONE:
            if(action.active) {
                return {...state, active: action.active}
            } else {
                return {...state, active: !state.active}
            }
        default:
            return state
    }
}