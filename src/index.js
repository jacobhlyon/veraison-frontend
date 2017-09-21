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
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'
import UserPage from './components/UserPage'

const rootReducer = combineReducers({users: usersReducer, auth: authReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(store.getState())
ReactDOM.render(
	<Provider store={store} >
		<Router>
			<div>
				<App />

				<Route exact path="/" component={LandingPage}/>
				<Route path="/login" component={LoginForm}/>
	      		<Route path="/signup" component={SignupForm} />
	      		<Route path="/user" component={UserPage} />

			</div>
		</Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
