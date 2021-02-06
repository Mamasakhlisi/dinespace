import {combineReducers} from 'redux'
// Reducer
import {groupSizeReducer} from 'redux/reducers/groupSizeReducer'
import {categoryReducer} from 'redux/reducers/categoryReducer'
import {activePersonDropdownReducer} from 'redux/reducers/activePersonDropdownReducer'
import {activeDropdownReducer} from 'redux/reducers/activeDropdownReducer'
import {dateHandlerReducer} from 'redux/reducers/dateHandlerReducer'
import {timeHandlerReducer} from 'redux/reducers/timeHandlerReducer'
import {dateShowReducer} from 'redux/reducers/dateShowReducer'
import {doneButtonShowReducer} from 'redux/reducers/doneButtonShowReducer'
import {stepReducer} from 'redux/reducers/stepReducer'


export const rootReducer = combineReducers({
 groupSizeReducer,
 categoryReducer,
 activePersonDropdownReducer,
 activeDropdownReducer,
 dateHandlerReducer,
 timeHandlerReducer,
 dateShowReducer,
 doneButtonShowReducer,
 stepReducer
});