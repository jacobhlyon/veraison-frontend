import React from 'react'
import { Label, Table} from 'semantic-ui-react'

const NosePalateComparisonTable = (props) => {

	return (
		<Table celled selectable>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Category</Table.HeaderCell>
			        <Table.HeaderCell>Nose Score</Table.HeaderCell>
			        <Table.HeaderCell>Palate Score</Table.HeaderCell>
			    </Table.Row>
			</Table.Header>

		    <Table.Body>
			    <Table.Row>
			        <Table.Cell>
			        	<Label ribbon>Fruit</Label>
			        </Table.Cell>
			        <Table.Cell>{props.wine.currentNoseScore.fruit}</Table.Cell>
			        <Table.Cell>{props.wine.currentPalateScore.fruit}</Table.Cell>
			    </Table.Row>
			    <Table.Row>
			        <Table.Cell>
			        	<Label ribbon>Fruit Character</Label>
			        </Table.Cell>
			        <Table.Cell>{props.wine.currentNoseScore.fruit_character}</Table.Cell>
			        <Table.Cell>{props.wine.currentPalateScore.fruit_character}</Table.Cell>
			    </Table.Row>
			    <Table.Row>
			        <Table.Cell>
			        	<Label ribbon>Fruit Description</Label>
			        </Table.Cell>
			        <Table.Cell>{props.wine.currentNoseScore.fruit_description}</Table.Cell>
			        <Table.Cell>{props.wine.currentPalateScore.fruit_description}</Table.Cell>
			    </Table.Row>
			    <Table.Row>
			        <Table.Cell>
			        	<Label ribbon>Non-Fruit</Label>
			        </Table.Cell>
			        <Table.Cell>{props.wine.currentNoseScore.non_fruit}</Table.Cell>
			        <Table.Cell>{props.wine.currentPalateScore.non_fruit}</Table.Cell>
			    </Table.Row>
			    <Table.Row>
			        <Table.Cell>
			        	<Label ribbon>Organic Earth</Label>
			        </Table.Cell>
			        <Table.Cell>{props.wine.currentNoseScore.organic_earth}</Table.Cell>
			        <Table.Cell>{props.wine.currentPalateScore.organic_earth}</Table.Cell>
			    </Table.Row>
			    <Table.Row>
			        <Table.Cell>
			        	<Label ribbon>Inorganic Earth</Label>
			        </Table.Cell>
			        <Table.Cell>{props.wine.currentNoseScore.inorganic_earth}</Table.Cell>
			        <Table.Cell>{props.wine.currentPalateScore.inorganic_earth}</Table.Cell>
			    </Table.Row>
			</Table.Body>
		</Table>
	)
}

export default NosePalateComparisonTable