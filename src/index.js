import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import sideBarReducer from './store/reducers/sideBar'

// import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  sideBar: sideBarReducer,
})

const reducerStore = createStore(rootReducer)

const app = (
  <Provider store={reducerStore}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

