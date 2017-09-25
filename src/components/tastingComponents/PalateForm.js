import React from 'react'
import { Dropdown, Button, Form, Radio, TextArea, } from 'semantic-ui-react'

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
     	bitter: "",
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



	handleInputChange = (event, eventProperties) => {
		if (eventProperties.name === "bitter" || eventProperties.name === "wood") {
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
					<h2>Palate Form</h2>
					<Form.Group inline>
						<label>Sweetness:</label>
							<Form.Field control={Radio} label="Dry" name="sweetness" value="Dry" onChange={this.handleInputChange} checked={this.state.sweetness === 'Dry'}/>
							<Form.Field control={Radio} label="Off-Dry" name="sweetness" value="Off-Dry"  onChange={this.handleInputChange} checked={this.state.sweetness === 'Off-Dry'}/>
							<Form.Field control={Radio} label="Sweet" name="sweetness" value="Sweet" onChange={this.handleInputChange} checked={this.state.sweetness === 'Sweet'}/>
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
					<Form.Group inline>
						<label>Bitter, Phenolic (White Wines Only):</label>
							<Form.Field control={Radio} label="Yes" name="bitter" value="true" onChange={this.handleInputChange} checked={this.state.bitter === true}/>
							<Form.Field control={Radio} label="No" name="bitter" value="false"  onChange={this.handleInputChange} checked={this.state.bitter === false}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Tannin (Red Wines Only):</label>
							<Form.Field control={Radio} label="Low" name="tannin" value="Low" onChange={this.handleInputChange} checked={this.state.tannin === 'Low'}/>
							<Form.Field control={Radio} label="Medium-" name="tannin" value="Medium-"  onChange={this.handleInputChange} checked={this.state.tannin === 'Medium-'}/>
							<Form.Field control={Radio} label="Medium" name="tannin" value="Medium" onChange={this.handleInputChange} checked={this.state.tannin === 'Medium'}/>
							<Form.Field control={Radio} label="Medium+" name="tannin" value="Medium+" onChange={this.handleInputChange} checked={this.state.tannin === 'Medium+'}/>
							<Form.Field control={Radio} label="High" name="tannin" value="High" onChange={this.handleInputChange} checked={this.state.tannin === 'High'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Acid:</label>
							<Form.Field control={Radio} label="Low" name="acid" value="Low" onChange={this.handleInputChange} checked={this.state.acid === 'Low'}/>
							<Form.Field control={Radio} label="Medium-" name="acid" value="Medium-"  onChange={this.handleInputChange} checked={this.state.acid === 'Medium-'}/>
							<Form.Field control={Radio} label="Medium" name="acid" value="Medium" onChange={this.handleInputChange} checked={this.state.acid === 'Medium'}/>
							<Form.Field control={Radio} label="Medium+" name="acid" value="Medium+" onChange={this.handleInputChange} checked={this.state.acid === 'Medium+'}/>
							<Form.Field control={Radio} label="High" name="acid" value="High" onChange={this.handleInputChange} checked={this.state.acid === 'High'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Alcohol:</label>
							<Form.Field control={Radio} label="Low" name="alcohol" value="Low" onChange={this.handleInputChange} checked={this.state.alcohol === 'Low'}/>
							<Form.Field control={Radio} label="Medium-" name="alcohol" value="Medium-"  onChange={this.handleInputChange} checked={this.state.alcohol === 'Medium-'}/>
							<Form.Field control={Radio} label="Medium" name="alcohol" value="Medium" onChange={this.handleInputChange} checked={this.state.alcohol === 'Medium'}/>
							<Form.Field control={Radio} label="Medium+" name="alcohol" value="Medium+" onChange={this.handleInputChange} checked={this.state.alcohol === 'Medium+'}/>
							<Form.Field control={Radio} label="High" name="alcohol" value="High" onChange={this.handleInputChange} checked={this.state.alcohol === 'High'}/>	
					</Form.Group>
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
					<Form.Group inline>
						<label>Length:</label>
							<Form.Field control={Radio} label="Short" name="length" value="Short" onChange={this.handleInputChange} checked={this.state.length === 'Short'}/>
							<Form.Field control={Radio} label="Medium-" name="length" value="Medium-"  onChange={this.handleInputChange} checked={this.state.length === 'Medium-'}/>
							<Form.Field control={Radio} label="Medium" name="length" value="Medium" onChange={this.handleInputChange} checked={this.state.length === 'Medium'}/>
							<Form.Field control={Radio} label="Medium+" name="length" value="Medium+" onChange={this.handleInputChange} checked={this.state.length === 'Medium+'}/>
							<Form.Field control={Radio} label="Long" name="length" value="Long" onChange={this.handleInputChange} checked={this.state.length === 'Long'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Complexity:</label>
							<Form.Field control={Radio} label="Low" name="complexity" value="Low" onChange={this.handleInputChange} checked={this.state.complexity === 'Low'}/>
							<Form.Field control={Radio} label="Medium-" name="complexity" value="Medium-"  onChange={this.handleInputChange} checked={this.state.complexity === 'Medium-'}/>
							<Form.Field control={Radio} label="Medium" name="complexity" value="Medium" onChange={this.handleInputChange} checked={this.state.complexity === 'Medium'}/>
							<Form.Field control={Radio} label="Medium+" name="complexity" value="Medium+" onChange={this.handleInputChange} checked={this.state.complexity === 'Medium+'}/>
							<Form.Field control={Radio} label="High" name="complexity" value="High" onChange={this.handleInputChange} checked={this.state.complexity === 'High'}/>	
					</Form.Group>
					<Form.TextArea label="Additional Notes" placeholder="Enter any specific notes here..." name="additional_notes" value={this.state.additional_notes} onChange={this.handleInputChange} />
					<Form.Field control={Button}>Submit</Form.Field>
				</Form>
		)
		
	}
}

export default PalateForm