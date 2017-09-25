import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchNewWine } from '../../actions/wineActions'

class WineSearchForm extends React.Component {

	state = {
		winery: "",
		varietal: "",
		vintage: ""
	}

	handleChange = (event) => {
		const value = event.target.value
		const target = event.target.dataset.name
		this.setState({
			[target]: value
		})
	}

	createWineSearchFetchURL = (props) => {

	}

	handleSubmit = (event) => {
		event.preventDefault()

		const winery = this.state.winery.toLowerCase().replace(" ", "+")
		const varietal = this.state.varietal.toLowerCase().replace(" ", "+")
		const vintage = this.state.vintage

		this.props.searchNewWine(winery, varietal, vintage)
			// .then(this.setState({
			// 	winery: "",
			// 	varietal: "",
			// 	vintage: ""
			// }))
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<h2>Search for a Wine to Taste</h2>
				<h3>Fill out as much as possible for accurate results</h3>
				<Form.Field>
					<input placeholder="Winery Name" data-name="winery" value={this.state.winery} onChange={this.handleChange} />
				</Form.Field>
				<Form.Field>
					<input placeholder="Varietal or Blend" data-name="varietal" value={this.state.varietal} onChange={this.handleChange} />
				</Form.Field>
				<Form.Field>
					<input placeholder="Vintage" data-name="vintage" value={this.state.vintage} onChange={this.handleChange} />
				</Form.Field>
				<Form.Field control={Button}>Submit</Form.Field>
			</Form>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchNewWine}, dispatch)
}


export default connect(null, mapDispatchToProps)(WineSearchForm)