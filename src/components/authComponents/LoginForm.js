import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { loginUser } from '../../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LoginForm extends React.Component {

	// this state is used for the controlled form
	state = {
		email: "",
		password: ""
	}

	componentWillUnmount(){
		console.log("I'm going away! LoginForm")
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

	    const userParams = {
	      email: this.state.email,
	      password: this.state.password
	    }

	    this.props.loginUser(userParams, this.props.history)
	      	.then( data => {
	        	this.setState({
	          		email: "",
	          		password: ""
	        	})	
	      	this.props.history.push('/user')
	      	})
	  }



	render() {
		return	(
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Email</label>
						<input placeholder='Email' data-name="email" onChange={this.handleInputChange} value={this.state.email}/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input placeholder='Password' data-name="password" onChange={this.handleInputChange} value={this.state.password}/>
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>
				<h3>Don't have an account?</h3> 
				<a href="/signup">Sign up for Veraison</a>
			</div>
		)
	}

} 

function mapDispatchToProps(dispatch) {
	return bindActionCreators({loginUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(LoginForm)