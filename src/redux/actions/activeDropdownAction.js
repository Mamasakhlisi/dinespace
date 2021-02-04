import {ACTIVE_DROPDOWN,DEACTIVE_DROPDOWN} from '../actionTypes'

export const activeDropdownAction = () => {
    return {type: ACTIVE_DROPDOWN}
}

export const deactiveDropdownAction = () => {
    return {type: DEACTIVE_DROPDOWN}
}