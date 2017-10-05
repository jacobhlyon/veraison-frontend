import React from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Dimmer, Loader, Menu, Segment, Header, Divider } from 'semantic-ui-react'
import WinePalateRadarChart from './WinePalateRadarChart'
import NosePalateComparisonTableContainer from '../../containers/wineContainers/NosePalateComparisonTableContainer'
import AllScoresContainer from '../../containers/wineContainers/AllScoresContainer'
import { fetchAllScoresForWine } from '../../actions/wineActions'
import { bindActionCreators } from 'redux'


class WinePage extends React.Component {
	state = {
		activeItem: 'Sight'
	}


	componentDidMount() {
		const wineId = JSON.parse(localStorage.getItem("currentWineObject"))
		const wine_score_id = localStorage.getItem("currentWineScoreId")
		console.log(wineId)
		const data = {
			id: wine_score_id,
			wine_id: wineId
		}
		this.props.fetchAllScoresForWine(data)
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		if (this.props.wine.currentWine === undefined || this.props.wine.avgPalateScores === undefined) {
				return (
				    <Dimmer active inverted>
				      <Loader size="large" />
				    </Dimmer>
				)
			} else {
				
				return(
					<div>
						<Grid>
							<Grid.Row>
								<Grid.Column width={4}></Grid.Column>
								<Segment raised>
								<Grid.Column width={3}>
									<br />
									<Image size='small' src={this.props.wine.currentWine.image} />
								</Grid.Column>
								</Segment>
								<Segment raised>
								<Grid.Column width={10}>
									<h1 style={{fontWeight: "bolder"}}>{this.props.wine.currentWine.name}</h1>
									<h2>{this.props.wine.currentWine.vintage}</h2>
									<h4 style={{fontWeight: "lighter"}}>{this.props.wine.currentWine.varietal}</h4>
									<h4 style={{fontWeight: "lighter"}}>{this.props.wine.currentWine.region}</h4>
								</Grid.Column>
								</Segment>
								<Segment raised>
								<Grid.Column width={3}>
									<br />
									<h3>Chart Key:</h3>
									<Header as='h4' color="blue" style={{fontWeight: "lighter"}}>Your Palate Score</Header>
									<Header as='h4' color="red" style={{fontWeight: "lighter"}}>Average Score for This Wine</Header>
								</Grid.Column>
								</Segment>
								<Grid.Column width={2}></Grid.Column>
							</Grid.Row>
							<Divider />
							<Grid.Row>
								<Grid.Column width={1}></Grid.Column>
								<Grid.Column width={6}>
									<h2>Nose and Palate Comparison</h2>
									<Divider />
									<br /><br /><br /><br />
									<NosePalateComparisonTableContainer wine={this.props.wine}/>
								</Grid.Column>
								<Grid.Column width={2}></Grid.Column>
								<Grid.Column width={6}>
									<h2>Palate Score</h2>
									<Divider />
									<WinePalateRadarChart />	
								</Grid.Column>
								<Grid.Column width={1}></Grid.Column>
							</Grid.Row>
							<Grid.Row> 
								<Grid.Column width={1}></Grid.Column>
								<Grid.Column width={14}>
				        <Menu attached='top' tabular>
				          <Menu.Item name='Sight' active={activeItem === 'Sight'} onClick={this.handleItemClick} />
				          <Menu.Item name='Nose' active={activeItem === 'Nose'} onClick={this.handleItemClick} />
				          <Menu.Item name='Palate' active={activeItem === 'Palate'} onClick={this.handleItemClick} />
				        </Menu>
				        <Segment attached='bottom'>
				     		<AllScoresContainer currentScore={this.state.activeItem} scoreInfo={this.props.wine}/>
				        </Segment>
				        		</Grid.Column>
				        		<Grid.Column width={1}></Grid.Column>
				        	</Grid.Row>
						</Grid>
						<br />
				      </div>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchAllScoresForWine}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WinePage)
