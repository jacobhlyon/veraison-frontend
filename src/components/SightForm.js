import React from 'react'
import { Button, Checkbox, Form, Input, Radio, Select } from 'semantic-ui-react'

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
		const value = eventProperties.value
		const target = eventProperties.name
		this.setState({
			[target]: value
		})
	}

	render() {

		return(
				<Form>
					<Form.Group inline>
						<label>Clarity/Visible Sediment:</label>
							<Form.Field control={Radio} label="Clear" name="clarity" value="clear" onChange={this.handleInputChange} checked={this.state.clarity === 'clear'}/>
							<Form.Field control={Radio} label="Hazy" name="clarity" value="hazy" onChange={this.handleInputChange} checked={this.state.clarity === 'hazy'}/>
							<Form.Field control={Radio} label="Turbid" name="clarity" value="turbid" onChange={this.handleInputChange} checked={this.state.clarity === 'turbid'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Concentration:</label>
							<Form.Field control={Radio} label="Pale" name="concentration" value="pale" onChange={this.handleInputChange} checked={this.state.concentration === 'pale'}/>
							<Form.Field control={Radio} label="Medium" name="concentration" value="medium"  onChange={this.handleInputChange} checked={this.state.concentration === 'medium'}/>
							<Form.Field control={Radio} label="Deep" name="concentration" value="deep" onChange={this.handleInputChange} checked={this.state.concentration === 'deep'}/>	
					</Form.Group>
				</Form>
		)
		
	}
}

export default SightForm