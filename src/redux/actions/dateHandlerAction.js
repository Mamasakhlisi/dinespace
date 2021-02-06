import {SET_DATE, SET_TIME} from '../actionTypes'

export const setdate = (date) => {
    return {type: SET_DATE, date: date}
}

export const settime = (time) => {
    return {type: SET_TIME, time: time}
}