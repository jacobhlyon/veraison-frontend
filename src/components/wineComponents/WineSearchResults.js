import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import WineSearchResultsContainer from './WineSearchResultsContainer'

class WineSearchResults extends React.Component {

	// console.log(this.props.wine)

	handleClick = (wine) => {
		console.log(wine)
	}

	componentWillMount() {
		if(!this.props.wine) {
			this.props.history.push('/winesearch')
		}
	}

	render() {
		const allWines = this.props.wine.map(wine => <WineSearchResultsContainer handleClick={this.handleClick} props={wine} key={wine.code}/>)
		return(
			<Card.Group> 
				{allWines}
			</Card.Group>
		)
	}
}

function mapStateToProps(state) {
	return {
		wine: state.wine.wineSearchResults
	}
}

export default connect(mapStateToProps)(WineSearchResults)