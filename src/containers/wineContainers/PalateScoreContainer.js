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
	const PalateScoreContainer = (props) => {


	return (
		  <div>
		  	I am the PALATE score!!!
		  </div>

	)

}

export default PalateScoreContainer