import React from 'react'
import { Table } from 'semantic-ui-react'

	const PalateScoreContainer = (props) => {

		const allFruit = props.score.fruit.map(fruit => fruit)
		const allFruitCharacter = props.score.fruit_character.map(fchar => fchar)
		const allNonFruit = props.score.non_fruit.map(nf => nf)
		const allOrganicEarth = props.score.organic_earth.map(oe => oe)
		const allInorganicEarth = props.score.inorganic_earth.map(ie => ie)

	return (
		  <Table celled selectable>
		  	<Table.Header>
		      <Table.Row>
		        <Table.HeaderCell style={{textTransform: "uppercase", letterSpacing: "2px"}}>Palate Category</Table.HeaderCell>
		        <Table.HeaderCell style={{textTransform: "uppercase", letterSpacing: "2px"}}>Score</Table.HeaderCell>
		      </Table.Row>
		    </Table.Header>

		    <Table.Body>
		      <Table.Row>
		        <Table.Cell>Sweetness</Table.Cell>
		        <Table.Cell>{props.score.sweetness}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Fruit</Table.Cell>
		        <Table.Cell>{allFruit.join(", ")}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Fruit Character</Table.Cell>
		        <Table.Cell>{allFruitCharacter.join(", ")}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Fruit Description</Table.Cell>
		        <Table.Cell>{props.score.fruit_description}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Non-Fruit</Table.Cell>
		        <Table.Cell>{allNonFruit.join(", ")}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Organic Earth</Table.Cell>
		        <Table.Cell>{allOrganicEarth.join(", ")}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Inorganic Earth</Table.Cell>
		        <Table.Cell>{allInorganicEarth.join(", ")}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Wood</Table.Cell>
		        <Table.Cell>{props.score.wood.toString()}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Wood Type</Table.Cell>
		        <Table.Cell>{props.score.wood_type}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Wood Age</Table.Cell>
		        <Table.Cell>{props.score.wood_age}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Bitter</Table.Cell>
		        <Table.Cell>{props.score.bitter}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Texture</Table.Cell>
		        <Table.Cell>{props.score.texture}</Table.Cell>
		      </Table.Row>
		      <Table.Row>
		        <Table.Cell>Additional Notes</Table.Cell>
		        <Table.Cell>{props.score.additional_notes}</Table.Cell>
		      </Table.Row>
		    </Table.Body>
		  </Table>

	)

}

export default PalateScoreContainer