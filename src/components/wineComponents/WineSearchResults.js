import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import WineSearchResultsContainer from './WineSearchResultsContainer'
import { bindActionCreators } from 'redux'
import { persistWine } from '../../actions/wineActions'

class WineSearchResults extends React.Component {

	// console.log(this.props.wine)

	handleClick = (wine) => {
	// 		const wineImage = if(wine.props.image == '') {
	// 	"https://images.unsplash.com/photo-1495929427389-a6451f2e01fa?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop="
	// } else {
	// 	wine.image
	// }
		const data = {
			name: wine.name,
			vintage: wine.vintage,
			varietal: wine.varietal,
			blend: false,
			wine_color: wine.type,
			image: wine.image,
			winery: wine.winery,
			snooth_rank: wine.snoothrank,
			region: wine.region
		}
		this.props.persistWine(data)
			.then(data => console.log(this.state))
			.then(data => this.props.history.push('/form/new'))
	}

	//this should prevent a page loading if there are no results
	//currently not working
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({persistWine}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WineSearchResults)