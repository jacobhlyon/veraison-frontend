import React from 'react'
import { Table } from 'semantic-ui-react'


	const SightScoreContainer = (props) => {


	return (
		  <Table celled selectable>
		  	<Table.Header>
		      <Table.Row>
		        <Table.HeaderCell>Sight Category</Table.HeaderCell>
		        <Table.HeaderCell>Score</Table.HeaderCell>
		      </Table.Row>
		    </Table.Header>

		    <Table.Body>
		      <Table.Row>
		        <Table.Cell>Clarity</Table.Cell>
		        <Table.Cell>{props.score.clarity}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Concentration</Table.Cell>
		        <Table.Cell>{props.score.concentration}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Color</Table.Cell>
		        <Table.Cell>{props.score.color}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Secondary Color</Table.Cell>
		        <Table.Cell>{props.score.secondary_color}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Rim Variation</Table.Cell>
		        <Table.Cell>{props.score.rim_variation.toString()}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Staining</Table.Cell>
		        <Table.Cell>{props.score.staining}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Tearing</Table.Cell>
		        <Table.Cell>{props.score.tearing}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Gas Evidence</Table.Cell>
		        <Table.Cell>{props.score.gas_evidence.toString()}</Table.Cell>
		      </Table.Row>
		    </Table.Body>
		  </Table>

	)

}

export default SightScoreContainer