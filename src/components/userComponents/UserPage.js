import React from 'react'
import { connect } from 'react-redux'
import { Button, Dimmer, Loader, Card, Grid, Divider } from 'semantic-ui-react'
import { fetchUserWines } from '../../actions/userActions'
import { bindActionCreators } from 'redux'
import WineSearchResultsContainer from '../wineComponents/WineSearchResultsContainer'
import { fetchAllScoresForWine } from '../../actions/wineActions'

class UserProfile extends React.Component {

	componentDidMount() {
	    const currentUser = localStorage.getItem('token')
	    this.props.fetchUserWines(currentUser)
	  }

	handleClick = (wine) => {
		const data = {
			user_id: this.props.auth.currentUser.id,
			wine_id: wine.id
		}
		this.props.fetchAllScoresForWine(data)
			.then(data => this.props.history.push('/winepage'))
			.catch(() => alert("This wine's score is incomplete!"))
			.catch(() => this.props.history.push('/profile'))
	}

	render(){
			if (this.props.user.currentUserWines === undefined || this.props.auth.currentUser.first_name === null) {
				return (
				    <Dimmer active inverted>
				      <Loader size="large" />
				    </Dimmer>
				)
			} else {
				const userWines = this.props.user.currentUserWines.map((wine, index) => <WineSearchResultsContainer handleClick={this.handleClick} props={wine} key={index}/>)

				return( 
				<div>
					<h1>Welcome, {this.props.auth.currentUser.first_name}</h1>
					<Button primary href='/winesearch'>Find a Wine to Taste</Button>
					<Divider />
						<Grid>
							<Grid.Row>
								<Grid.Column width={1}></Grid.Column>
								<Grid.Column width={14}>
									<Card.Group>
										{userWines}
									</Card.Group>	
								</Grid.Column>
								<Grid.Column width={1}></Grid.Column>
							</Grid.Row>
						</Grid>
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
	return bindActionCreators({fetchUserWines, fetchAllScoresForWine}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)