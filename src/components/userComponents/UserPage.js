import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { fetchUserWineScores } from '../../actions/userActions'
import { bindActionCreators } from 'redux'

class UserProfile extends React.Component {

componentDidMount() {
    const currentUser = localStorage.getItem('token')
    this.props.fetchUserWineScores(currentUser)
  }

	render(){

		console.log(this.props)
		return(
			<div>
				<h1>Welcome, {this.props.auth.currentUser.first_name}</h1>
				<h3>Recently-Rated Wines:</h3>
				<Button primary href='/winesearch'>Find a Wine to Taste</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		wine: state.wine,
		user: state.users
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchUserWineScores}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)