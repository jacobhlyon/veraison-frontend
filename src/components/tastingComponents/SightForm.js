import React from 'react'
import { Button, Checkbox, Form, Input, Radio, Select } from 'semantic-ui-react'
import { connect } from 'react-redux'

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
		console.log(this.state)
	}


	render() {

		console.log(this.props)

		return(
				<Form onSubmit={this.handleSubmit}>
					<h2>Sight Form</h2>
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
					<Form.Group inline>
						<label>Color:</label>
							<Form.Field control={Radio} label="Water White" name="color" value="water white" onChange={this.handleInputChange} checked={this.state.color === 'water white'}/>
							<Form.Field control={Radio} label="Straw" name="color" value="straw"  onChange={this.handleInputChange} checked={this.state.color === 'straw'}/>
							<Form.Field control={Radio} label="Yellow" name="color" value="yellow" onChange={this.handleInputChange} checked={this.state.color === 'yellow'}/>
							<Form.Field control={Radio} label="Gold" name="color" value="gold" onChange={this.handleInputChange} checked={this.state.color === 'gold'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Secondary Color:</label>
							<Form.Field control={Radio} label="Pale" name="secondary_color" value="silver" onChange={this.handleInputChange} checked={this.state.secondary_color === 'silver'}/>
							<Form.Field control={Radio} label="Medium" name="secondary_color" value="green"  onChange={this.handleInputChange} checked={this.state.secondary_color === 'green'}/>
							<Form.Field control={Radio} label="Deep" name="secondary_color" value="copper" onChange={this.handleInputChange} checked={this.state.secondary_color === 'copper'}/>	
					</Form.Group>
					<Form.Group inline>
						<label>Rim Variation:</label>
							<Form.Field control={Radio} label="Yes" name="rim_variation" value="true" onChange={this.handleInputChange} checked={this.state.rim_variation === true}/>
							<Form.Field control={Radio} label="No" name="rim_variation" value="false"  onChange={this.handleInputChange} checked={this.state.rim_variation === false}/>	
					</Form.Group>
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
					<Form.Group inline>
						<label>Gas Evidence:</label>
							<Form.Field control={Radio} label="Yes" name="gas_evidence" value="true" onChange={this.handleInputChange} checked={this.state.gas_evidence === true}/>
							<Form.Field control={Radio} label="No" name="gas_evidence" value="false"  onChange={this.handleInputChange} checked={this.state.gas_evidence === false}/>	
					</Form.Group>
					<Form.Field control={Button}>Submit</Form.Field>
				</Form>
		)
		
	}

}

function mapStateToProps(state) {
	return {
		wine: state.wine
	}
}

export default connect(mapStateToProps)(SightForm)