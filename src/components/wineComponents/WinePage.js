import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Table } from 'semantic-ui-react'

class WinePage extends React.Component {


	render() {

		const sightValues = Object.values(this.props.wine.currentSightScore)
		const sightResults = sightValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})
		
		const noseValues = Object.values(this.props.wine.currentNoseScore)
		const noseResults = noseValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})

		const palateValues = Object.values(this.props.wine.currentPalateScore)
		const palateResults = palateValues.map((value, index) => {return <Table.Row key={index}><Table.Cell>{value}</Table.Cell></Table.Row>})

		return(
			<div>
				<Card className="ui container center aligned">
					<Image className="ui container center aligned" src={this.props.wine.currentWine.image} size="small"/>
					<Card.Content>
						<Card.Header>
						{this.props.wine.currentWine.name}
						</Card.Header>
					</Card.Content>
				</Card>
				<Table striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Sight Results</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{sightResults}
					</Table.Body>
				</Table>
				<Table striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Nose Results</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{noseResults}
					</Table.Body>
				</Table>
				<Table striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Palate Results</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{palateResults}
					</Table.Body>
				</Table>
			</div>
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