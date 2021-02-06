import {SET_STEP} from '../actionTypes'

const initialState = {
    step: 0,
  };

export const stepReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_STEP:
            return {...state, step: action.step}
        default:
            return state
    }
}