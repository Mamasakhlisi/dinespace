import {SETCATEGORY,RESETCATEGORY} from '../actionTypes'

export const setcategory = (item) => {
    return {type: SETCATEGORY,item}
}

export const resetcategory = () => {
    return {type: RESETCATEGORY}
}