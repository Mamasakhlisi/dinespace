import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// React Redux
import {Provider} from 'react-redux'
// Redux
import {createStore } from 'redux'
// Components
import App from './App';
// Reducer
import {rootReducer} from 'redux/rootReducer'

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