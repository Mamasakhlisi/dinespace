import {ACTIVE_PERSON_DROPDOWN,DEACTIVE_PERSON_DROPDOWN} from '../actionTypes'

export const activePersonDropdownAction = () => {
    return {type: ACTIVE_PERSON_DROPDOWN}
}

export const deactivePersonDropdownAction = () => {
    return {type: DEACTIVE_PERSON_DROPDOWN}
}