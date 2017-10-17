import React from 'react'
import { Dropdown, Button, Form, Radio, TextArea, Grid, Header, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createNoseScore } from '../../actions/wineActions'
import { faults, all_fruit, fruit_character, non_fruit, organic_earth, inorganic_earth} from './TastingFormData'
import { faults_popup, intensity, nose_age, nose_fruit, nose_non_fruit, nose_wood } from './PopupData'


class NoseForm extends React.Component {

	state = {
		wine_score_id: "",
		clean: "",
     	faults: ["No Faults"],
     	other_faults: "",
     	intensity: "",
    	age: "",
     	fruit: {},
     	fruit_character: {},
     	fruit_description: "",
    	non_fruit: {},
    	organic_earth: {},
		inorganic_earth: {},
     	wood: "",
     	wood_type: "",
     	wood_age: "",
    	additional_notes: ""
	}



	handleInputChange = (event, eventProperties) => {
		if (eventProperties.name === "clean" || eventProperties.name === "wood") {
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

		const noseScoreParams = {
		wine_score_id: this.props.wine.currentWineScore.id,
		clean: this.state.clean,
     	faults: this.state.faults,
     	other_faults: this.state.other_faults,
     	intensity: this.state.intensity,
    	age: this.state.age,
     	fruit: this.state.fruit,
     	fruit_character: this.state.fruit_character,
     	fruit_description: this.state.fruit_description,
    	non_fruit: this.state.non_fruit,
    	organic_earth: this.state.organic_earth,
		inorganic_earth: this.state.inorganic_earth,
     	wood: this.state.wood,
     	wood_type: this.state.wood_type,
     	wood_age: this.state.wood_age,
    	additional_notes: this.state.additional_notes
		}
		console.log(noseScoreParams)
		this.props.createNoseScore(noseScoreParams)
			.then(this.props.history.push('/palateform'))
	}

	render() {

		if (this.props.wine.currentWine === undefined || this.props.wine.currentWine.name === undefined ) {
			
				alert("Sorry - something went wrong.")
				this.props.history.push('/profile')
			return (
				<h2>Something went wrong. Please return home</h2>
			)
		} else {
			return(
					<div>
						<Header as='h1'>
							<Image size="tiny" src={require('../../images/001-nose.png')} />
							<Header.Content>
								Nose Form for {this.props.wine.currentWine.name}
							</Header.Content>
						</Header>
						<br />
							<Form onSubmit={this.handleSubmit}>
								<Grid>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={2}>
											{faults_popup}	
										</Grid.Column>
										<Grid.Column width={6}>
											<h2>All fields are required</h2>
											<Form.Group inline>
												<label>Clean (No Faults):</label>
													<Form.Field control={Radio} label="Yes" name="clean" value="true" onChange={this.handleInputChange} checked={this.state.clean === true}/>
													<Form.Field control={Radio} label="No" name="clean" value="false"  onChange={this.handleInputChange} checked={this.state.clean === false}/>	
											</Form.Group>
											<Form.Group inline>
												<label>Specific Faults:</label>
												<Dropdown placeholder='Select Up To Two' name="faults" fluid multiple selection options={faults} onChange={this.handleInputChange} />	
											</Form.Group>
											<Form.TextArea label="Other Faults" placeholder="Enter any specific notes here..." name="other_faults" value={this.state.other_faults} onChange={this.handleInputChange} />
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={2}>
											{intensity}
										</Grid.Column>
										<Grid.Column width={6}>
											<Form.Group inline>
												<label>Intensity:</label>
													<Form.Field control={Radio} label="Delicate" name="intensity" value="Delicate" onChange={this.handleInputChange} checked={this.state.intensity === 'Delicate'}/>
													<Form.Field control={Radio} label="Moderate" name="intensity" value="Moderate"  onChange={this.handleInputChange} checked={this.state.intensity === 'Moderate'}/>
													<Form.Field control={Radio} label="Powerful" name="intensity" value="Powerful" onChange={this.handleInputChange} checked={this.state.intensity === 'Powerful'}/>
											</Form.Group>
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={2}>
											{nose_age}
										</Grid.Column>
										<Grid.Column width={6}>
											<Form.Group inline>
												<label>Age Assessment:</label>
													<Form.Field control={Radio} label="Youthful" name="age" value="Youthful" onChange={this.handleInputChange} checked={this.state.age === 'Youthful'}/>
													<Form.Field control={Radio} label="Developing" name="age" value="Developing"  onChange={this.handleInputChange} checked={this.state.age === 'Developing'}/>
													<Form.Field control={Radio} label="Vinous" name="age" value="Vinous" onChange={this.handleInputChange} checked={this.state.age === 'Vinous'}/>	
											</Form.Group>
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={2}>
											{nose_fruit}
										</Grid.Column>
										<Grid.Column width={6}>
											<Form.Group inline>
												<label>Fruit:</label>
													<Dropdown placeholder='Select Up To Two' name="fruit" fluid multiple selection options={all_fruit} onChange={this.handleInputChange} />	
											</Form.Group>
											<Form.Group inline>
												<label>Fruit Character:</label>
													<Dropdown placeholder='Select Up To Two' name="fruit_character" fluid multiple selection options={fruit_character} onChange={this.handleInputChange} />	
											</Form.Group>
											<Form.TextArea label="Fruit Description" placeholder="Enter any specific notes here..." name="fruit_description" value={this.state.fruit_description} onChange={this.handleInputChange} />
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={2}>
											{nose_non_fruit}
										</Grid.Column>
										<Grid.Column width={6}>
											<Form.Group inline>
												<label>Non-Fruit:</label>
													<Dropdown placeholder='Select Up To Two' name="non_fruit" fluid multiple selection options={non_fruit} onChange={this.handleInputChange} />	
											</Form.Group>
											<Form.Group inline>
												<label>Organic Earth:</label>
													<Dropdown placeholder='Select Up To Two' name="organic_earth" fluid multiple selection options={organic_earth} onChange={this.handleInputChange} />	
											</Form.Group>
											<Form.Group inline>
												<label>Inorganic Earth (Mineral):</label>
													<Dropdown placeholder='Select Up To Two' name="inorganic_earth" fluid multiple selection options={inorganic_earth} onChange={this.handleInputChange} />	
											</Form.Group>
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={2}>
											{nose_wood}
										</Grid.Column>
										<Grid.Column width={6}>
											<Form.Group inline>
												<label>Wood Present?</label>
													<Form.Field control={Radio} label="Yes" name="wood" value="true" onChange={this.handleInputChange} checked={this.state.wood === true}/>
													<Form.Field control={Radio} label="No" name="wood" value="false"  onChange={this.handleInputChange} checked={this.state.wood === false}/>	
											</Form.Group>
											<Form.Group inline>
												<label>Wood Type:</label>
													<Form.Field control={Radio} label="American" name="wood_type" value="American" onChange={this.handleInputChange} checked={this.state.wood_type === 'American'}/>
													<Form.Field control={Radio} label="French" name="wood_type" value="French"  onChange={this.handleInputChange} checked={this.state.wood_type=== 'French'}/>
													<Form.Field control={Radio} label="None" name="wood_type" value="None"  onChange={this.handleInputChange} checked={this.state.wood_type=== 'None'}/>
											</Form.Group>
											<Form.Group inline>
												<label>Wood Age:</label>
													<Form.Field control={Radio} label="Old" name="wood_age" value="Old" onChange={this.handleInputChange} checked={this.state.wood_age === 'Old'}/>
													<Form.Field control={Radio} label="New" name="wood_age" value="New"  onChange={this.handleInputChange} checked={this.state.wood_age === 'New'}/>
													<Form.Field control={Radio} label="None" name="wood_age" value="None"  onChange={this.handleInputChange} checked={this.state.wood_age=== 'None'}/>
											</Form.Group>
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column width={4}></Grid.Column>
										<Grid.Column width={8}>
											<Form.TextArea label="Additional Notes" placeholder="Enter any specific notes here..." name="additional_notes" value={this.state.additional_notes} onChange={this.handleInputChange} />
										</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
									</Grid.Row>
								</Grid >
								<br />
								<Form.Field control={Button}>Submit</Form.Field>
								<br />
							</Form>
						</div>
			)
			
		}
	}
}


function mapStateToProps(state){

	return {
		wine: state.wine,
		auth: state.auth.currentUser
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({createNoseScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoseForm)