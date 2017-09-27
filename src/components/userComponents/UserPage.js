import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class UserProfile extends React.Component {



	render(){

		console.log(this.props)
		return(
			<div>
				<h1>Welcome, {this.props.user.first_name}</h1>
				<h3>Recently-Rated Wines:</h3>
				<Button primary href='/winesearch'>Find a Wine to Taste</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.auth.currentUser,
		wine: state.wine
	}
}

export default connect(mapStateToProps)(UserProfile)