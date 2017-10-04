import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Radio } from 'semantic-ui-react'
import { createWineScore } from '../../actions/wineActions'
import { bindActionCreators } from 'redux'

class NewTastingForm extends React.Component {

	createTastingForm = (event) => {
		const wineScoreParams = {
			user_id: this.props.auth.id,
			wine_id: this.props.wine.id,
			user_score: ''
		}
		this.props.createWineScore(wineScoreParams)
			.then(data => this.props.history.push('/sightform'))
	}

	// may get to this later
	// state = {
	// 	wine_color: ""
	// }

	// handleInputChange = (event, eventProperties) => {
	// 	const value = eventProperties.value
	// 	const target = eventProperties.name
	// 	this.setState({
	// 		[target]: value
	// 	})
	// 	const data = {
	// 		wine_id: this.props.wine.id,
	// 		wine_color: eventProperties.value
	// 	}
	// 	this.props.updateWine(data)
	// }


	render() {

	console.log(this.props)

		return(
			<div>
				<h2>Please confirm that you would like to taste this wine:</h2>
				<h3>{this.props.wine.name}</h3>
				<Button primary onClick={this.createTastingForm}>Start Tasting</Button>
				<Button href='/winesearch'>Search Again</Button>
			</div>	
		)
	}

}

function mapStateToProps(state){

	return {
		wine: state.wine.currentWine,
		auth: state.auth.currentUser
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({createWineScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTastingForm)

// default background image
// src="https://images.unsplash.com/photo-1495929427389-a6451f2e01fa?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop="