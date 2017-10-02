import React from 'react'
import { Step, Icon } from 'semantic-ui-react'



	const claritySteps = [
		{ disabled: true, title: 'Clear' },
		{ active: true, title: 'Hazy' },
	  	{ disabled: true, title: 'Turbid' }
	]
				// to use when you can make it work
		    	// 

	const concentrationSteps = [
		{ disabled: true, title: 'Pale' },
		{ disabled: true, title: 'Medium' },
	  	{ active: true, title: 'Deep' }
	]
	const SightScoreContainer = (props) => {


	return (
		  <div>
		  	<h2>Clarity: </h2><Step.Group items={claritySteps} />
		    <h2>Concentration: {props.score.concentration}</h2>
		    <h2>Color: {props.score.color}</h2>
		    <h2>Secondary Color:</h2>
		    	<h2>{props.score.secondary_color}</h2>
		    <h2>Rim Variation:</h2>
		    	<h2>{props.score.rim_variation}</h2>
		    <h2>Staining:</h2>
		    	<h2>{props.score.staining}</h2>
		    <h2>Tearing:</h2>
		    	<h2>{props.score.tearing}</h2>
		    <h2>Gas Evidence:</h2>
		    	<h2>{props.score.gas_evidence}</h2>
		  </div>

	)

}

export default SightScoreContainer