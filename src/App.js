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
import NoseForm from './components/tastingComponents/NoseForm'
import PalateForm from './components/tastingComponents/PalateForm'
import WineSearchForm from './components/wineComponents/WineSearchForm'
import WineSearchResults from './components/wineComponents/WineSearchResults'

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }





  render() {

    console.log(this.props.users)
    console.log("I am state!", this.props.wine)

    return (
      <div className="App">
        <NavBar />
        <div>
            <Route path="/winesearch" render={({history}) => <WineSearchForm history={history}/>} />
            <Route path="/sightform" component={SightForm} />
            <Route path="/noseform" component={NoseForm} />
            <Route exact path="/" component={LandingPage}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/signup" component={SignupForm} />
            <Route path="/user" component={UserPage} />
            <Route path="/palateform" component={PalateForm} />
            <Route path="/winesearchresults" component={WineSearchResults} />
        </div>
      </div>
    );
  }
}
  function mapStateToProps(state) {
    return {
      users: state.users.allUsers,
      wine: state.wine
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
