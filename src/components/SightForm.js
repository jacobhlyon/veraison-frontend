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

	handleChange = (e, { value }) => {this.setState({ value })}

	render() {

		const { value } = this.state

		return(
			<div>
				<Form>
					<Form.Group inline>
						<label>Clarity/Visible Sediment</label>
							<Form.Field control={Radio} label="Clear" value="clear" checked={value === 
								'clear'} onChange={this.handleChange} />
							<Form.Field control={Radio} label="Hazy" value="hazy" checked={value === 
								'hazy'} onChange={this.handleChange} />
							<Form.Field control={Radio} label="Turbid" value="turbid" checked={value === 
								'turbid'} onChange={this.handleChange} />	
					</Form.Group>
					<Form.Group inline>
						<label>Concentration</label>
							<Form.Field control={Radio} label="Pale" value="pale" checked={value === 
								'pale'} onChange={this.handleChange} />
							<Form.Field control={Radio} label="Medium" value="medium" checked={value === 
								'medium'} onChange={this.handleChange} />
							<Form.Field control={Radio} label="Deep" value="deep" checked={value === 
								'deep'} onChange={this.handleChange} />	
					</Form.Group>
				</Form>
			</div>
		)
		
	}
}

export default SightForm