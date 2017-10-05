import React from 'react'
import { Button, Header, Grid } from 'semantic-ui-react'

const LandingPage = () => {
	return(
		<div>
		<Grid>
			<Grid.Row>
				<Grid.Column width={2}></Grid.Column>
				<Grid.Column width={6}>
					<br /><br />
					<Header as='h1' style={{fontWeight: "bolder", fontSize: "500%"}}>Veraison</Header>
					<Header as='h3' style={{fontWeight: "lighter"}}>Ripen your knowledge</Header>
					<br />
					<Button inverted href='/signup'>Create an Account</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		<video poster="versaison.jpg" id="bgvid" playsInline autoPlay muted loop>
        	<source src="/veraison.mp4" type="video/mp4" />
    	</video>
		</div>
	)
}

export default LandingPage