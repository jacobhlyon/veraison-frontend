import React from 'react'
import { Dropdown, Button, Form, Input, Radio, TextArea, Checkbox, Select  } from 'semantic-ui-react'

const faults = [
		{ key: 'TCA', text: 'TCA', value: 'TCA' },
		{ key: 'Brettanomyces', text: 'Brettanomyces', value: 'Brettanomyces' },
		{ key: 'H2S', text: 'H2S', value: 'H2S' },
		{ key: 'Volatile Acidity', text: 'Volatile Acidity', value: 'Volatile Acidity' },
		{ key: 'Ethyl Acetate', text: 'Ethyl Acetate', value: 'Ethyl Acetate' },
		{ key: 'Oxidation', text: 'Oxidation', value: 'Oxidation' }
	]

const white_fruit = [
		{ key: 'Citrus', text: 'Citrus', value: 'Citrus' },
		{ key: 'Apple/Pear', text: 'Apple/Pear', value: 'Apple/Pear' },
		{ key: 'Stone Fruit', text: 'Stone Fruit', value: 'Stone Fruit' },
		{ key: 'Tropical Fruit', text: 'Tropical Fruit', value: 'Tropical Fruit' },
		{ key: 'Melon', text: 'Melon', value: 'Melon' }
	]

const red_fruit = [
		{ key: 'Red', text: 'Red', value: 'Red' },
		{ key: 'Black', text: 'Black', value: 'Black' },
		{ key: 'Blue', text: 'Blue', value: 'Blue' }
	]

const fruit_character = [
		{ key: 'Ripe', text: 'Ripe', value: 'Ripe' },
		{ key: 'Fresh', text: 'Fresh', value: 'Fresh' },
		{ key: 'Tart', text: 'Tart', value: 'Tart' },
		{ key: 'Baked', text: 'Baked', value: 'Baked' },
		{ key: 'Stewed', text: 'Stewed', value: 'Stewed' },
		{ key: 'Dried', text: 'Dried', value: 'Dried' },
		{ key: 'Desiccated', text: 'Desiccated', value: 'Desiccated' },
		{ key: 'Bruised', text: 'Bruised', value: 'Bruised' },
		{ key: 'Jammy', text: 'Jammy', value: 'Jammy' }
	]

const non_fruit = [
		{ key: 'Floral', text: 'Floral', value: 'Floral' },
		{ key: 'Vegetal', text: 'Vegetal', value: 'Vegetal' },
		{ key: 'Herbal', text: 'Herbal', value: 'Herbal' },
		{ key: 'Spice', text: 'Spice', value: 'Spice' },
		{ key: 'Animal', text: 'Animal', value: 'Animal' },
		{ key: 'Barn', text: 'Barn', value: 'Barn' },
		{ key: 'Petrol', text: 'Petrol', value: 'Petrol' },
		{ key: 'Fermentation', text: 'Fermentation', value: 'Fermentation' }
	]

const organic_earth = [
		{ key: 'Forest Floor', text: 'Forest Floor', value: 'Forest Floor' },
		{ key: 'Compost', text: 'Compost', value: 'Compost' },
		{ key: 'Mushrooms', text: 'Mushrooms', value: 'Mushrooms' },
		{ key: 'Potting Soil', text: 'Potting Soil', value: 'Potting Soil' }
	]

const inorganic_earth = [
		{ key: 'Mineral', text: 'Mineral', value: 'Mineral' },
		{ key: 'Wet Stone', text: 'Wet Stone', value: 'Wet Stone' },
		{ key: 'Limestone', text: 'Limestone', value: 'Limestone' },
		{ key: 'Chalk', text: 'Chalk', value: 'Chalk' },
		{ key: 'Slate', text: 'Slate', value: 'Slate' },
		{ key: 'Flint', text: 'Flint', value: 'Flint' }
	]


class NoseForm extends React.Component {

	state = {
		wine_score_id: "",
		clean: "",
     	faults: "",
     	other_faults: [],
     	intensity: "",
    	age: "",
     	fruit: [],
     	fruit_character: [],
     	fruit_description: "",
    	non_fruit: [],
    	organic_earth: [],
		inorganic_earth: [],
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
		console.log(this.state)
	}

	render() {

		return(
				<Form onSubmit={this.handleSubmit}>
					<h2>Nose Form</h2>
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
					<Form.Group inline>
						<label>Intensity:</label>
							<Form.Field control={Radio} label="Delicate" name="intensity" value="Delicate" onChange={this.handleInputChange} checked={this.state.intensity === 'Delicate'}/>
							<Form.Field control={Radio} label="Moderate" name="intensity" value="Moderate"  onChange={this.handleInputChange} checked={this.state.intensity === 'Moderate'}/>
							<Form.Field control={Radio} label="Powerful" name="intensity" value="Powerful" onChange={this.handleInputChange} checked={this.state.intensity === 'Powerful'}/>
					</Form.Group>
					<Form.Group inline>
						<label>Age Assessment:</label>
							<Form.Field control={Radio} label="Youthful" name="age" value="Youthful" onChange={this.handleInputChange} checked={this.state.age === 'Youthful'}/>
							<Form.Field control={Radio} label="Developing" name="age" value="Developing"  onChange={this.handleInputChange} checked={this.state.age === 'Developing'}/>
							<Form.Field control={Radio} label="Vinous" name="age" value="Vinous" onChange={this.handleInputChange} checked={this.state.age === 'Vinous'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Fruit:</label>
							<Dropdown placeholder='Select Up To Two' name="fruit" fluid multiple selection options={white_fruit} onChange={this.handleInputChange} />	
					</Form.Group>
					<Form.Group inline>
						<label>Fruit Character:</label>
							<Dropdown placeholder='Select Up To Two' name="fruit_character" fluid multiple selection options={fruit_character} onChange={this.handleInputChange} />	
					</Form.Group>
					<Form.TextArea label="Fruit Description" placeholder="Enter any specific notes here..." name="fruit_description" value={this.state.fruit_description} onChange={this.handleInputChange} />
					<Form.Group inline>
						<label>Non-Fruit:</label>
							<Dropdown placeholder='Select Up To Two' name="non-fruit" fluid multiple selection options={non_fruit} onChange={this.handleInputChange} />	
					</Form.Group>
					<Form.Group inline>
						<label>Organic Earth:</label>
							<Dropdown placeholder='Select Up To Two' name="organic_earth" fluid multiple selection options={organic_earth} onChange={this.handleInputChange} />	
					</Form.Group>
					<Form.Group inline>
						<label>Inorganic Earth (Mineral):</label>
							<Dropdown placeholder='Select Up To Two' name="inorganic_earth" fluid multiple selection options={inorganic_earth} onChange={this.handleInputChange} />	
					</Form.Group>
					<Form.Group inline>
						<label>Wood Present?</label>
							<Form.Field control={Radio} label="Yes" name="wood" value="true" onChange={this.handleInputChange} checked={this.state.wood === true}/>
							<Form.Field control={Radio} label="No" name="wood" value="false"  onChange={this.handleInputChange} checked={this.state.wood === false}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Wood Type:</label>
							<Form.Field control={Radio} label="American" name="wood_type" value="American" onChange={this.handleInputChange} checked={this.state.wood_type === 'American'}/>
							<Form.Field control={Radio} label="French" name="wood_type" value="French"  onChange={this.handleInputChange} checked={this.state.wood_type=== 'French'}/>
					</Form.Group>
					<Form.Group inline>
						<label>Wood Age:</label>
							<Form.Field control={Radio} label="Old" name="wood_age" value="Old" onChange={this.handleInputChange} checked={this.state.wood_age === 'Old'}/>
							<Form.Field control={Radio} label="New" name="wood_age" value="New"  onChange={this.handleInputChange} checked={this.state.wood_age === 'New'}/>
					</Form.Group>
					<Form.TextArea label="Additional Notes" placeholder="Enter any specific notes here..." name="additional_notes" value={this.state.additional_notes} onChange={this.handleInputChange} />
					<Form.Field control={Button}>Submit</Form.Field>
				</Form>
		)
		
	}
}

export default NoseForm