import React from 'react'
import { Table } from 'semantic-ui-react'

const SightResultsContainer = (props) => {

	return(
		<Table.Row>
			<Table.Cell>{props.key}</Table.Cell>
			<Table.Cell>{props.value}</Table.Cell>
		</Table.Row>
	)
}

export default SightResultsContainer