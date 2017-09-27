import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Table } from 'semantic-ui-react'
import SightResultsContainer from './SightResultsContainer'

class WinePage extends React.Component {


	render() {

	// for (var [key, value] of Object.entries(this.props.wine.currentSightScore)) {
	// 	console.log(<SightResultsContainer key={key} value={value}/>)
	// }

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

					</Table.Body>
				</Table>
				<Table striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Nose Results</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
					
					</Table.Body>
				</Table>
				<Table striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Palate Results</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
					
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