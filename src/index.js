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
import { BrowserRouter as Router } from 'react-router-dom';
import wineReducer from './reducers/wineReducer'

const rootReducer = combineReducers({users: usersReducer, auth: authReducer, wine: wineReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(store.getState())
ReactDOM.render(
	<Provider store={store} >
		<Router>
			<div>
				<App />
			</div>
		</Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
