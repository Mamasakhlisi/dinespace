import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// React Redux
import {Provider} from 'react-redux'
// Redux
import {createStore} from 'redux'
// Components
import App from './App';
// Reducer
import {groupSizeReducer} from './reducers/groupSizeReducer'

// Redux store
const store = createStore(groupSizeReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);