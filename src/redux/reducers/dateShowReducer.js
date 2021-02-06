import {SET_SHOW} from '../actionTypes'

const initialState = {
    show: false,
  };

export const dateShowReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_SHOW:
            if(action.show) {
                return {...state, show: action.show}
            } else {
                return {...state, show: !state.show}
            }
        default:
            return state
    }
}