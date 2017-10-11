import React from 'react'

import authActions from '../actions/authActions'

class Home extends React.Component {


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