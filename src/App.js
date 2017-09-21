import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'

class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Veraison</h2>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
