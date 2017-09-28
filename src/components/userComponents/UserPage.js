import React from 'react'
import { connect } from 'react-redux'
import { Button, Dimmer, Loader, Image, Segment, Card } from 'semantic-ui-react'
import { fetchUserWines } from '../../actions/userActions'
import { bindActionCreators } from 'redux'
import WineSearchResultsContainer from '../wineComponents/WineSearchResultsContainer'

class UserProfile extends React.Component {

componentDidMount() {
    const currentUser = localStorage.getItem('token')
    this.props.fetchUserWines(currentUser)
  }

	render(){
			if (this.props.user.currentUserWines === undefined) {
				return (
				    <Dimmer active inverted>
				      <Loader size="large" />
				    </Dimmer>
				)
			} else {
				const userWines = this.props.user.currentUserWines.map((wine, index) => <WineSearchResultsContainer props={wine} key={index}/>)

				return( 
				<div>
					<h1>Welcome, {this.props.auth.currentUser.first_name}</h1>
					<Button primary href='/winesearch'>Find a Wine to Taste</Button>
					<h3>Recently-Rated Wines:</h3>
						<Card.Group>
							{userWines}
						</Card.Group>	
				</div>

				)
			}
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
	return bindActionCreators({fetchUserWines}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)