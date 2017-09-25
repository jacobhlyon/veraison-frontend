import React from 'react'
import { connect } from 'react-redux'

class WineSearchResults extends React.Component {



	render() {
		const allWines = this.props.wine.map(wine => wine.name)
		return(
			<div> 
				<h2>I am the results!</h2>
				{allWines}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		wine: state.wine.wineSearchResults
	}
}

export default connect(mapStateToProps)(WineSearchResults)