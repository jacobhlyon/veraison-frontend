import React from 'react'
import { connect } from 'react-redux'
import { Image, Grid } from 'semantic-ui-react'
import WinePalateRadarChart from './WinePalateRadarChart'


class WinePage extends React.Component {


	componentDidMount() {
	const currentWine = this.props.wine.allWines[1]
		
	}

	render() {




		// const sightValues = Object.values(this.props.wine.currentSightScore)
		// const sightResults = sightValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})
		
		// const noseValues = Object.values(this.props.wine.currentNoseScore)
		// const noseResults = noseValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})

		// const palateValues = Object.values(this.props.wine.currentPalateScore)
		// const palateResults = palateValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})

		return(
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={4}>
					</Grid.Column>
					<Grid.Column width={8}>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={8}>
						<h2>I am some material </h2>
					</Grid.Column>
					<Grid.Column width={4}>
						<WinePalateRadarChart />	
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}

}

function mapStateToProps(state){
	return {
		wine: state.wine,
		auth: state.auth
	}
}

export default connect(mapStateToProps)(WinePage)
