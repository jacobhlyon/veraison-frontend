import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'

const store = createStore(usersReducer, applyMiddleware(thunk))

console.log(store.getState())

// const rootReducer = combineReducers({usersReducer, adlfadl})


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
