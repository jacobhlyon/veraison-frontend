import React from 'react'
import { Button, Form } from 'semantic-ui-react'
// import Auth from '../adapters/auth'
import { loginUser } from '../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LoginForm extends React.Component {

	state = {
		email: "",
		password: ""
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

	 handleSubmit = (event) => {
	    event.preventDefault()

	    console.log("handle submit hit")
	    const userParams = {
	      email: this.state.email,
	      password: this.state.password
	    }

	    this.props.loginUser(userParams)
	      .then(
	        this.setState({
	          email: "",
	          password: ""
	        })
	      )
	        // this.props.history.replace("/")

	  }



	render() {
		return	(
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' onChange={this.handleEmailChange} value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder='Password' onChange={this.handlePasswordChange} value={this.state.password}/>
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}

} 

function mapDispatchToProps(dispatch) {
	return bindActionCreators({loginUser}, dispatch)
}


export default connect(null, mapDispatchToProps)(LoginForm)