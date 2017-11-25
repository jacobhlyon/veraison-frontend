import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { createUser } from '../../actions/userActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignupForm extends React.Component {

	state = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: ""
	}

	handleInputChange = (event) => {
		const value = event.target.value
		const target = event.target.dataset.name
		this.setState({
			[target]: value
		})
	}


	handleSubmit = (event) => {
	    event.preventDefault()

	    const newUserParams = {
	      first_name: this.state.first_name,
	      last_name: this.state.last_name,
	      email: this.state.email,
	      password: this.state.password,
	      password_confirmation: this.state.password_confirmation
	    }

	    this.props.createUser(newUserParams)
	      .then( data =>
	        this.setState({
	          	first_name: "",
			  	last_name: "",
			 	 email: "",
			 	 password: "",
				password_confirmation: ""
	        })
	      ).then(data => this.props.history.replace("/profile"))
	}



	render() {
		return	(
			<Grid>
			<Grid.Column width={4} />
			<Grid.Column width={8} >
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<label>First Name</label>
					<input placeholder='First Name' data-name="first_name" onChange={this.handleInputChange} value={this.state.first_name}/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' data-name="last_name" onChange={this.handleInputChange} value={this.state.last_name}/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' data-name="email" onChange={this.handleInputChange} value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input type="password" placeholder='Password' data-name="password" onChange={this.handleInputChange} value={this.state.password}/>
				</Form.Field>
				<Form.Field>
					<label>Confirm Password</label>
					<input type="password" placeholder='Confirm Password' data-name="password_confirmation" onChange={this.handleInputChange} value={this.state.password_confirmation}/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
			</Grid.Column>
			<Grid.Column width={4} />
			</Grid>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createUser}, dispatch)
}



export default connect(null, mapDispatchToProps)(SignupForm)
