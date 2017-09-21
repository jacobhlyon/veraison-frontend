import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends React.Component {

	


	render() {
		return	(
			<Form>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder='Password' />
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}

} 



export default LoginForm