import React from 'react'
import { Table } from 'semantic-ui-react'

const SightResultsContainer = (props) => {
	console.log(props)

	return(
		<Table.Row>
			<Table.Cell>{props}</Table.Cell>
		</Table.Row>
	)
}

export default SightResultsContainer