import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
// import authorize from './components/hocs/authorize'
import { bindActionCreators } from 'redux'
import { fetchUsers } from './actions/userActions'
import NavBar from './components/NavBar'

import { Route} from 'react-router-dom';
import SignupForm from './components/userComponents/SignupForm'
import LoginForm from './components/authComponents/LoginForm'
import LandingPage from './components/LandingPage'
import UserPage from './components/userComponents/UserPage'
import SightForm from './components/tastingComponents/SightForm'

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }





  render() {

    console.log(this.props.users)

    return (
      <div className="App">
        <NavBar />
        <div>
            <Route path="/sightform" component={SightForm} />
            <Route exact path="/" component={LandingPage}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/signup" component={SignupForm} />
            <Route path="/user" component={UserPage} />
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
