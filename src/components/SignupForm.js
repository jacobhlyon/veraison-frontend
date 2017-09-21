import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import Auth from '../adapters/auth'

class SignupForm extends React.Component {

	state = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: ""
	}

	handleFirstNameChange = (event) => {
		this.setState({
			first_name: event.target.value
		})
	}

	handleLastNameChange = (event) => {
		this.setState({
			last_name: event.target.value
		})
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	handlePasswordConfirmationChange = (event) => {
		this.setState({
			password_confirmation: event.target.value
		})
	}

	 handleSubmit = (event) => {
	    event.preventDefault()

	    // console.log(this.state)

	    const userParams = {
	      first_name: this.state.first_name,
	      last_name: this.state.last_name,	
	      email: this.state.email,
	      password: this.state.password,
	      password_confirmation: this.state.password_confirmation
	    }
	    Auth.signup(userParams)
	      .then((user) => {
	        this.setState({
	          last_name: "",
				email: "",
				password: "",
				password_confirmation: ""
	        })
	        localStorage.setItem("token", user.jwt)
	        console.log(localStorage.getItem("token"))
	        // then I'll want to redirect to user page
	        // this.props.history.replace("/")
	      })

	  }



	render() {
		return	(
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<label>First Name</label>
					<input placeholder='First Name' onChange={this.handleFirstNameChange} value={this.state.first_name}/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' onChange={this.handleLastNameChange} value={this.state.last_name}/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder='Password' onChange={this.handlePasswordChange} value={this.state.password}/>
				</Form.Field>
				<Form.Field>
					<label>Confirm Password</label>
					<input placeholder='Confirm Password' onChange={this.handlePasswordConfirmationChange} value={this.state.password_confirmation}/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}

} 



export default SignupForm