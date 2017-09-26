import React from 'react'
//not sure if this is what I need
import authActions from '../actions/authActions'

class Home extends React.Component {

  // this is on my navbar?
  // logout = () => {
  //   Auth.logOut()
  //   this.props.history.push('/login')
  // }

  render() {
    return (
      <div>
        <p>Welcome</p>
        <button onClick={this.logout}>Logout</button>

      </div>
    )
  }
}

export default Home