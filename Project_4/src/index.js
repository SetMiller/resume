import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// Redux store
import cardsReducer from './store/reducers/cards'
import blogenReducer from './store/reducers/blogen'
import modalReducer from './store/reducers/modal'
import isAuthReducer from './store/reducers/auth'
import badgeTextReducer from './store/reducers/badgeText'
import loginReducer from './store/reducers/login'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  cards: cardsReducer,
  blogen: blogenReducer,
  modal: modalReducer,
  isAuth: isAuthReducer,
  badgeText: badgeTextReducer,
  login: loginReducer,
})

const reducerStore = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

const app = (
  <Provider store={reducerStore}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
