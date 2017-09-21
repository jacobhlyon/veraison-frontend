import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import authorize from './components/hocs/authorize'
import SignupForm from './components/SignupForm'
import { bindActionCreators } from 'redux'
import { fetchUsers } from './actions/userActions'
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  // state = {
  //   currentUser: {},
  //   isLoggedin: localStorage.getItem("jwt") ? true : false,
  //   jwt: localStorage.getItem("jwt"),
  //   allUsers: []
  // }

  // handleButtonClick = () => {
  //   Auth.me().then(user => {
  //     console.log(user)

  //   })

  // }

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

    console.log(this.props.users)

    return (
      <div className="App">
        <NavBar />
        <div>
          <SignupForm />
        </div>
      </div>
    );
  }
}
  function mapStateToProps(state) {
    return {
      users:state.users.allUsers
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
