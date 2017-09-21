import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import authorize from './components/hocs/authorize'
import Auth from './adapters/auth'
import SignupForm from './components/SignupForm'

class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // }
  state = {
    currentUser: {},
    isLoggedin: localStorage.getItem("jwt") ? true : false,
    jwt: localStorage.getItem("jwt")
  }

  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        })
      })
  }

  handleButtonClick = () => {
    Auth.me().then(user => {
      console.log(user)

    })

  }

  // render() {
  //   const AuthHome = authorize(Home)
  //   return (
  //     <div>
  //       <div>
  //         <Route path="/home" component={AuthHome}/>
  //         <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
  //       </div>
  //     </div>
  //   );
  // }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Veraison</h2>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default connect()(App);
