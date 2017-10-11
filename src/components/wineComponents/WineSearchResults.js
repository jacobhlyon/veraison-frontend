import React from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'
import WineSearchResultsContainer from './WineSearchResultsContainer'
import { bindActionCreators } from 'redux'
import { persistWine } from '../../actions/wineActions'

class WineSearchResults extends React.Component {


	handleClick = (wine) => {

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
			.then(data => this.props.history.push('/form/new'))
	}

	componentWillMount() {
		if(!this.props.wine) {
			this.props.history.push('/winesearch')
		}
	}

	render() {
		const allWines = this.props.wine.map(wine => <WineSearchResultsContainer handleClick={this.handleClick} props={wine} key={wine.code}/>)
		return(
				<Grid>
					<Grid.Row>
						<Grid.Column width={1}></Grid.Column>
						<Grid.Column width={14}>
							<Card.Group> 
								{allWines}
							</Card.Group>
						</Grid.Column>
						<Grid.Column width={1}></Grid.Column>
					</Grid.Row>
				</Grid>
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