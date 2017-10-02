import React from 'react'
import { connect } from 'react-redux'
import { Image, Grid, Dimmer, Loader, Input, Menu, Segment } from 'semantic-ui-react'
import WinePalateRadarChart from './WinePalateRadarChart'
import NosePalateComparisonTableContainer from '../../containers/wineContainers/NosePalateComparisonTableContainer'
import AllScoresContainer from '../../containers/wineContainers/AllScoresContainer'


class WinePage extends React.Component {
	state = {
		activeItem: 'Sight'
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state


		if (this.props.wine.currentWine === undefined) {
				return (
				    <Dimmer active inverted>
				      <Loader size="large" />
				    </Dimmer>
				)
			} else {
				
				return(
					<div>
						<Grid celled>
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
				        <Menu attached='top' tabular>
				          <Menu.Item name='Sight' active={activeItem === 'Sight'} onClick={this.handleItemClick} />
				          <Menu.Item name='Nose' active={activeItem === 'Nose'} onClick={this.handleItemClick} />
				          <Menu.Item name='Palate' active={activeItem === 'Palate'} onClick={this.handleItemClick} />
				        </Menu>
				        <Segment attached='bottom'>
				     		<AllScoresContainer currentScore={this.state.activeItem} scoreInfo={this.props.wine}/>
				        </Segment>
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

export default connect(mapStateToProps)(WinePage)
