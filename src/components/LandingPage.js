import React from 'react'
import { Button } from 'semantic-ui-react'

const LandingPage = () => {
	return(
		<div>
			<h1>Welcome to Veraison</h1>
			<h3>Ripen your knowledge</h3>
			<Button primary href='/signup'>Create an Account</Button>
		</div>
	)
}

export default LandingPage