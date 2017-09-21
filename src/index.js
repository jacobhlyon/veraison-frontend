import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({users: usersReducer, auth: authReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(store.getState())



ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
