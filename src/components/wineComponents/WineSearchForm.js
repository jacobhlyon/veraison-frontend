import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class WineSearchForm extends React.Component {

	state = {
		searchField: ""
	}

	handleChange = (event) => {
		this.setState({
			searchField: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<h2>Search for a Wine to Taste</h2>
				<Form.Input placeholder="Search Wines" value={this.state.searchField} onChange={this.handleChange} icon="search"/>
				<Form.Field control={Button}>Submit</Form.Field>
			</Form>
		)
	}

}

export default WineSearchForm