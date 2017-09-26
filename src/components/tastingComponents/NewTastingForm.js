import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class NewTastingForm extends React.Component {

	createTastingForm = (event) => {
		const user_id = this.props.auth.id
		const wine_id = this.props.wine.id
	}


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

export default connect(mapStateToProps)(NewTastingForm)

// default background image
// src="https://images.unsplash.com/photo-1495929427389-a6451f2e01fa?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop="