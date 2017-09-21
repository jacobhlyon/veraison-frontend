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
	    Auth.signup(newUserParams)
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
					<input placeholder='Password' data-name="password" onChange={this.handleInputChange} value={this.state.password}/>
				</Form.Field>
				<Form.Field>
					<label>Confirm Password</label>
					<input placeholder='Confirm Password' data-name="password_confirmation" onChange={this.handleInputChange} value={this.state.password_confirmation}/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}

} 



export default SignupForm