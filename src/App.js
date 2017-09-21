import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import authorize from './components/hocs/authorize'
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

  render() {

    console.log(this.props.users)

    return (
      <div className="App">
        <NavBar />
        <div>
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
