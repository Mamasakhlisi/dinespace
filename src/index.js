import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// React Redux
import {Provider} from 'react-redux'
// Redux
import {createStore,combineReducers } from 'redux'
// Components
import App from './App';
// Reducer
import {groupSizeReducer} from 'redux/reducers/groupSizeReducer'
import {categoryReducer} from 'redux/reducers/categoryReducer'
import {activePersonDropdownReducer} from 'redux/reducers/activePersonDropdownReducer'
import {activeDropdownReducer} from 'redux/reducers/activeDropdownReducer'
import {dateHandlerReducer} from 'redux/reducers/dateHandlerReducer'

const rootReducer = combineReducers({
 groupSizeReducer,
 categoryReducer,
 activePersonDropdownReducer,
 activeDropdownReducer,
 dateHandlerReducer
});

// Redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);