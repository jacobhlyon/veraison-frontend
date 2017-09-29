import React from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Dimmer, Loader } from 'semantic-ui-react'
import WinePalateRadarChart from './WinePalateRadarChart'
import NosePalateComparisonTableContainer from '../../containers/wineContainers/NosePalateComparisonTableContainer'


class WinePage extends React.Component {


	render() {

		console.log(this.props)


		// const sightValues = Object.values(this.props.wine.currentSightScore)
		// const sightResults = sightValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})
		
		// const noseValues = Object.values(this.props.wine.currentNoseScore)
		// const noseResults = noseValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})

		// const palateValues = Object.values(this.props.wine.currentPalateScore)
		// const palateResults = palateValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})
		if (this.props.wine.currentWine === undefined) {
				return (
				    <Dimmer active inverted>
				      <Loader size="large" />
				    </Dimmer>
				)
			} else {
				return(
					<Grid >
						<Grid.Row>
							<Grid.Column width={4}>
								<Image centered size='small' src={this.props.wine.currentWine.image} />
							</Grid.Column>
							<Grid.Column width={8}>
								<h2>{this.props.wine.currentWine.winery}</h2>
								<h3>{this.props.wine.currentWine.varietal}</h3>
								<h4>{this.props.wine.currentWine.vintage}</h4>
								<h4>{this.props.wine.currentWine.region}</h4>
							</Grid.Column>
							<Grid.Column width={4}>
								<h2>Snooth Rating:{this.props.wine.currentWine.snooth_rank}</h2>
								<h2>{this.props.auth.currentUser.first_name}'s Rating: TBD</h2>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={8}>
								<NosePalateComparisonTableContainer wine={this.props.wine}/>
							</Grid.Column>
							<Grid.Column width={4}>
								<WinePalateRadarChart />	
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)
			}

		}
}

function mapStateToProps(state){
	return {
		wine: state.wine,
		auth: state.auth
	}
}

export default connect(mapStateToProps)(WinePage)
