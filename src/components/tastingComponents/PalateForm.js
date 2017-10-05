import React from 'react'
import { Dropdown, Button, Form, Radio, TextArea, Grid, Image, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPalateScore } from '../../actions/wineActions' 
import { faults, all_fruit, fruit_character, non_fruit, organic_earth, inorganic_earth} from './TastingFormData'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

	const style = { width: 400, margin: 50 }
	const marks = {
		1: 'Low',
		2: 'Medium -',
		3: 'Medium',
		4: 'Medium +',
		5: 'High'
	}

class PalateForm extends React.Component {

	state = {
		wine_score_id: "",
		sweetness: "",
     	fruit: [],
     	fruit_character: [],
     	fruit_description: "",
    	non_fruit: [],
    	organic_earth: [],
		inorganic_earth: [],
     	wood: "",
     	wood_type: "",
     	wood_age: "",
     	bitter: "n/a",
     	tannin: "",
     	acid: "",
     	alcohol: "",
     	body: "",
     	texture: "",
     	balance: "",
     	length: "",
     	complexity: "",
    	additional_notes: ""
	}

	handleAlcoholChange = (value) => {
		this.setState({
			alcohol: value
		})
	}

	handleComplexityChange = (value) => {
		this.setState({
			complexity: value
		})
	}

	handleLengthChange = (value) => {
		this.setState({
			length: value
		})
	}

	handleAcidChange = (value) => {
		this.setState({
			acid: value
		})
	}

	handleTanninChange = (value) => {
		this.setState({
			tannin: value
		})
	}

	handleInputChange = (event, eventProperties) => {
		if (eventProperties.name === "bitter" || eventProperties.name === "wood") {
			const newValue = eventProperties.value === "true"
			const target = eventProperties.name
			this.setState({
			[target]: newValue
			})
		// } else if (eventProperties.name ===) {

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

		const palateScoreParams = {
		wine_score_id: this.props.wine.currentWineScore.id,
		sweetness: this.state.sweetness,
     	fruit: this.state.fruit,
     	fruit_character: this.state.fruit_character,
     	fruit_description: this.state.fruit_description,
    	non_fruit: this.state.non_fruit,
    	organic_earth: this.state.organic_earth,
		inorganic_earth: this.state.inorganic_earth,
     	wood: this.state.wood,
     	wood_type: this.state.wood_type,
     	wood_age: this.state.wood_age,
     	bitter: this.state.bitter,
     	tannin: this.state.tannin,
     	acid: this.state.acid,
     	alcohol: this.state.alcohol,
     	body: this.state.body,
     	texture: this.state.texture,
     	balance: this.state.balance,
     	length: this.state.length,
     	complexity: this.state.complexity,
    	additional_notes: this.state.additional_notes
	}
		console.log(palateScoreParams)
		this.props.createPalateScore(palateScoreParams)
			.then(data => this.props.history.push('/winepage'))
	}

	render() {

		return(
				<div>
					<Header as='h1'>
						<Image size="tiny" src={require('../../images/002-tongue.png')} />
						<Header.Content>
							Palate Form for {this.props.wine.currentWine.name}
						</Header.Content>
					</Header>
					<br />
					<Form onSubmit={this.handleSubmit}>
						<Grid>
							<Grid.Row>
								<Grid.Column width={4}></Grid.Column>
								<Grid.Column width={2}>
										<Image size="tiny" src={require('../../images/001-food-3.png')} />
								</Grid.Column>
								<Grid.Column width={6}>
									<Form.Group inline>
										<label>Sweetness:</label>
											<Form.Field control={Radio} label="Dry" name="sweetness" value="Dry" onChange={this.handleInputChange} checked={this.state.sweetness === 'Dry'}/>
											<Form.Field control={Radio} label="Off-Dry" name="sweetness" value="Off-Dry"  onChange={this.handleInputChange} checked={this.state.sweetness === 'Off-Dry'}/>
											<Form.Field control={Radio} label="Sweet" name="sweetness" value="Sweet" onChange={this.handleInputChange} checked={this.state.sweetness === 'Sweet'}/>
									</Form.Group>
									</Grid.Column>
									<Grid.Column width={4}></Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={4}></Grid.Column>
									<Grid.Column width={2}>
											<Image size="tiny" src={require('../../images/031-cherry.png')} />
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
											<Image size="tiny" src={require('../../images/021-food-1.png')} />
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
											<Image size="tiny" src={require('../../images/036-nature.png')} />
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
									<Grid.Column width={2}>
											<Image size="tiny" src={require('../../images/030-grapes.png')} />
									</Grid.Column>
									<Grid.Column width={6}>
										<Form.Group inline>
											<label>Bitter, Phenolic (White Wines Only):</label>
												<Form.Field control={Radio} label="Yes" name="bitter" value="true" onChange={this.handleInputChange} checked={this.state.bitter === true}/>
												<Form.Field control={Radio} label="No" name="bitter" value="false"  onChange={this.handleInputChange} checked={this.state.bitter === false}/>	
										</Form.Group>
										<Form.Group inline style={style}>
											<label>Tannin (Red Wines Only):</label>
												<Slider min={1} marks={marks} name="tannin" step={null} min={1} max={5} onChange={this.handleTanninChange} defaultValue={3} />
										</Form.Group>
									</Grid.Column>
									<Grid.Column width={4}></Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={4}></Grid.Column>
									<Grid.Column width={2}>
											<Image size="tiny" src={require('../../images/011-drink.png')} />
									</Grid.Column>
									<Grid.Column width={6}>
										<Form.Group inline style={style}>
											<label>Acid:</label>
												<Slider min={1} marks={marks} name="acid" step={null} min={1} max={5} onChange={this.handleAcidChange} defaultValue={3} />
										</Form.Group>
										<Form.Group inline style={style}>
											<label>Alcohol:</label>
												<Slider min={1} marks={marks} name="alcohol" step={null} min={1} max={5} onChange={this.handleAlcoholChange} defaultValue={3} />
										</Form.Group>
									</Grid.Column>
										<Grid.Column width={4}></Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={4}></Grid.Column>
									<Grid.Column width={2}>
											<Image size="tiny" src={require('../../images/010-diamond.png')} />
									</Grid.Column>
									<Grid.Column width={6}>
										<Form.Group inline>
											<label>Body:</label>
												<Form.Field control={Radio} label="Light" name="body" value="Light" onChange={this.handleInputChange} checked={this.state.body === 'Light'}/>
												<Form.Field control={Radio} label="Medium" name="body" value="Medium"  onChange={this.handleInputChange} checked={this.state.body === 'Medium'}/>
												<Form.Field control={Radio} label="Full" name="body" value="Full" onChange={this.handleInputChange} checked={this.state.body === 'Full'}/>
										</Form.Group>
										<Form.Group inline>
											<label>Texture:</label>
												<Form.Field control={Radio} label="Creamy" name="texture" value="Creamy" onChange={this.handleInputChange} checked={this.state.texture === 'Creamy'}/>
												<Form.Field control={Radio} label="Round" name="texture" value="Round"  onChange={this.handleInputChange} checked={this.state.texture === 'Round'}/>
												<Form.Field control={Radio} label="Lean" name="texture" value="Lean" onChange={this.handleInputChange} checked={this.state.texture === 'Lean'}/>
										</Form.Group>
										<Form.TextArea label="Balance" placeholder="Does anything specific dominate?" name="balance" value={this.state.balance} onChange={this.handleInputChange} />
									</Grid.Column>
									<Grid.Column width={4}></Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={4}></Grid.Column>
									<Grid.Column width={2}>
											<Image size="tiny" src={require('../../images/007-tool.png')} />
									</Grid.Column>
									<Grid.Column width={6}>
										<Form.Group inline style={style}>
											<label>Finish Length:</label>
												<Slider min={1} marks={marks} name="length" step={null} min={1} max={5} onChange={this.handleLengthChange} defaultValue={3} />	
										</Form.Group>
										<Form.Group inline style={style}>
											<label>Complexity:</label>
												<Slider min={1} marks={marks} name="complexity" step={null} min={1} max={5} onChange={this.handleComplexityChange} defaultValue={3} />	
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
	return bindActionCreators({createPalateScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PalateForm)