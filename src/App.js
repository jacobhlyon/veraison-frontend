import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUsers } from './actions/userActions'
import NavBar from './components/NavBar'

import { Route } from 'react-router-dom';
import SignupForm from './components/userComponents/SignupForm'
import LoginForm from './components/authComponents/LoginForm'
import LandingPage from './components/LandingPage'
import UserProfile from './components/userComponents/UserPage'
import SightForm from './components/tastingComponents/SightForm'
import NoseForm from './components/tastingComponents/NoseForm'
import PalateForm from './components/tastingComponents/PalateForm'
import WineSearchForm from './components/wineComponents/WineSearchForm'
import WineSearchResults from './components/wineComponents/WineSearchResults'
import authorize from './components/hocs/authorize.js'
import { withRouter } from 'react-router'
import { confirmCurrentUser } from './actions/authActions'
import NewTastingForm from './components/tastingComponents/NewTastingForm'
import WinePage from './components/wineComponents/WinePage'
import { fetchAllWines } from './actions/wineActions'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'


class App extends Component {

  componentDidMount() {
    const currentUser = localStorage.getItem('token')
    this.props.confirmCurrentUser(currentUser)
      .then(this.props.fetchAllWines(currentUser))
  }



  render() {
    const currentUser = localStorage.getItem('token')

    return (
      <div className="App">
        <div>
            <Route path="/" component={NavBar} />
            <Route path="/winesearch" render={({history}) => <WineSearchForm history={history}/>} />
            <Route path="/sightform" component={SightForm} />
            <Route path="/noseform" component={NoseForm} />
            <Route exact path="/" component={LandingPage}/>
            <Route path="/login" render={({history}) => <LoginForm history={history}/>} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/palateform" component={PalateForm} />
            <Route path="/winesearchresults" component={WineSearchResults} />
            <Route path="/form/new" component={NewTastingForm} />
            <Route path="/winepage" component={WinePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={Footer} />
        </div>
      </div>
    );
  }
}
  function mapStateToProps(state) {
    return {
      wine: state.wine,
      auth: state.auth.currentUser,
      user: state.user
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers, confirmCurrentUser, fetchAllWines}, dispatch)
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(authorize(App)));
