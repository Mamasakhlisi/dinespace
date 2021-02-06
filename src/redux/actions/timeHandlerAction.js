import {SET_TIME} from '../actionTypes'

export const settime = (time) => {
    return {type: SET_TIME, time: time}
}