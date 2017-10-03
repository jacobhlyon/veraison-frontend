import React from 'react'
import { Button, Form, Radio, Grid, Header, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSightScore } from '../../actions/wineActions'

class SightForm extends React.Component {

	state = {
		wine_score_id: "",
		clarity: "",
     	concentration: "",
     	color: "",
     	secondary_color: "",
    	rim_variation: "",
     	staining: "",
     	tearing: "",
    	gas_evidence: ""
	}

	handleInputChange = (event, eventProperties) => {
		if (eventProperties.name === "rim_variation" || eventProperties.name === "gas_evidence") {
			const newValue = eventProperties.value === "true"
			const target = eventProperties.name
			this.setState({
			[target]: newValue
		})
		} else {
			const value = eventProperties.value
			const target = eventProperties.name
			this.setState({
				[target]: value
			})
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		
		const sightFormParams = {
			wine_score_id: this.props.wine.currentWineScore.id,
			clarity: this.state.clarity,
	     	concentration: this.state.concentration,
	     	color: this.state.color,
	     	secondary_color: this.state.secondary_color,
	    	rim_variation: this.state.rim_variation,
	     	staining: this.state.staining,
	     	tearing: this.state.tearing,
	    	gas_evidence: this.state.gas_evidence
		}
		this.props.createSightScore(sightFormParams)
			.then(data => this.props.history.push('/noseform'))

	}


	render() {

		console.log(this.props)
		
		return(	
			<div>
				<Header as='h1'>
					<Image size="tiny" src={require('../../images/003-eye.png')} />
					<Header.Content>
						Sight Form for {this.props.wine.currentWine.name}
					</Header.Content>
				</Header>
				<br />
				<Form onSubmit={this.handleSubmit}>
					<Grid>
						<Grid.Row>
							<Grid.Column width={4}></Grid.Column>
							<Grid.Column width={2}>
									<Image size="tiny" src={require('../../images/002-drink-1.png')} />
							</Grid.Column>
							<Grid.Column width={6}>
									<Form.Group inline>
										<label>Clarity/Visible Sediment:</label>
											<Form.Field control={Radio} label="Clear" name="clarity" value="clear" onChange={this.handleInputChange} checked={this.state.clarity === 'clear'}/>
											<Form.Field control={Radio} label="Hazy" name="clarity" value="hazy"  onChange={this.handleInputChange} checked={this.state.clarity === 'hazy'}/>
											<Form.Field control={Radio} label="Turbid" name="turbid" value="deep" onChange={this.handleInputChange} checked={this.state.clarity === 'turbid'}/>	
									</Form.Group>
									<Form.Group inline>
										<label>Concentration:</label>
											<Form.Field control={Radio} label="Pale" name="concentration" value="pale" onChange={this.handleInputChange} checked={this.state.concentration === 'pale'}/>
											<Form.Field control={Radio} label="Medium" name="concentration" value="medium"  onChange={this.handleInputChange} checked={this.state.concentration === 'medium'}/>
											<Form.Field control={Radio} label="Deep" name="concentration" value="deep" onChange={this.handleInputChange} checked={this.state.concentration === 'deep'}/>	
									</Form.Group>
							</Grid.Column>
							<Grid.Column width={4}></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={4}></Grid.Column>
							<Grid.Column width={2}>
									<Image size="tiny" src={require('../../images/026-cup.png')} />
							</Grid.Column>
							<Grid.Column width={6}>
									<Form.Group inline>
										<label>Color:</label>
											<Form.Field control={Radio} label="Water White" name="color" value="water white" onChange={this.handleInputChange} checked={this.state.color === 'water white'}/>
											<Form.Field control={Radio} label="Straw" name="color" value="straw"  onChange={this.handleInputChange} checked={this.state.color === 'straw'}/>
											<Form.Field control={Radio} label="Yellow" name="color" value="yellow" onChange={this.handleInputChange} checked={this.state.color === 'yellow'}/>
											<Form.Field control={Radio} label="Gold" name="color" value="gold" onChange={this.handleInputChange} checked={this.state.color === 'gold'}/>	
									</Form.Group>
									<Form.Group inline>
										<label>Secondary Color:</label>
											<Form.Field control={Radio} label="Silver" name="secondary_color" value="silver" onChange={this.handleInputChange} checked={this.state.secondary_color === 'silver'}/>
											<Form.Field control={Radio} label="Green" name="secondary_color" value="green"  onChange={this.handleInputChange} checked={this.state.secondary_color === 'green'}/>
											<Form.Field control={Radio} label="Copper" name="secondary_color" value="copper" onChange={this.handleInputChange} checked={this.state.secondary_color === 'copper'}/>	
									</Form.Group>
									<Form.Group inline>
										<label>Rim Variation:</label>
											<Form.Field control={Radio} label="Yes" name="rim_variation" value="true" onChange={this.handleInputChange} checked={this.state.rim_variation === true}/>
											<Form.Field control={Radio} label="No" name="rim_variation" value="false"  onChange={this.handleInputChange} checked={this.state.rim_variation === false}/>	
									</Form.Group>
							</Grid.Column>
							<Grid.Column width={4}></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={4}></Grid.Column>
							<Grid.Column width={2}>
									<Image size="tiny" src={require('../../images/012-wine-glasses.png')} />
							</Grid.Column>
							<Grid.Column width={6}>
									<Form.Group inline>
										<label>Staining:</label>
											<Form.Field control={Radio} label="None" name="staining" value="none" onChange={this.handleInputChange} checked={this.state.staining === 'none'}/>
											<Form.Field control={Radio} label="Light" name="staining" value="light"  onChange={this.handleInputChange} checked={this.state.staining === 'light'}/>
											<Form.Field control={Radio} label="Medium" name="staining" value="medium" onChange={this.handleInputChange} checked={this.state.staining === 'medium'}/>
											<Form.Field control={Radio} label="Heavy" name="staining" value="heavy" onChange={this.handleInputChange} checked={this.state.staining === 'heavy'}/>	
									</Form.Group>
									<Form.Group inline>
										<label>Tearing:</label>
											<Form.Field control={Radio} label="Light" name="tearing" value="light" onChange={this.handleInputChange} checked={this.state.tearing === 'light'}/>
											<Form.Field control={Radio} label="Medium" name="tearing" value="medium"  onChange={this.handleInputChange} checked={this.state.tearing === 'medium'}/>
											<Form.Field control={Radio} label="Heavy" name="tearing" value="heavy" onChange={this.handleInputChange} checked={this.state.tearing === 'heavy'}/>	
									</Form.Group>
							</Grid.Column>
							<Grid.Column width={4}></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={4}></Grid.Column>
							<Grid.Column width={2}>
									<Image size="tiny" src={require('../../images/012-champagne.png')} />
							</Grid.Column>
							<Grid.Column width={6}>
									<Form.Group inline>
										<label>Gas Evidence:</label>
											<Form.Field control={Radio} label="Yes" name="gas_evidence" value="true" onChange={this.handleInputChange} checked={this.state.gas_evidence === true}/>
											<Form.Field control={Radio} label="No" name="gas_evidence" value="false"  onChange={this.handleInputChange} checked={this.state.gas_evidence === false}/>	
									</Form.Group>
							</Grid.Column>
							<Grid.Column width={4}></Grid.Column>
						</Grid.Row>
					</Grid >
					<br />
					<Form.Field control={Button}>Submit</Form.Field>
				</Form>
		</div>
		)
		
	}

}

function mapStateToProps(state){

	return {
		wine: state.wine,
		auth: state.auth.currentUser
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({createSightScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SightForm)