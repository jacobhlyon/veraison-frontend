import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const WineSearchResultsContainer = (wine) => {
	
	return (
		<Card onClick={() => wine.handleClick(wine.props)}> 
			<Card.Content>
				<Image size='small' src={wine.props.image} />
				<Card.Header>
					{wine.props.winery}
				</Card.Header>
				<Card.Meta>
					{wine.props.vintage}
				</Card.Meta>
				<Card.Description>
					{wine.props.varietal}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				Snooth Rating: {wine.props.snoothrank}
			</Card.Content>
		</Card>
	)	

}

export default WineSearchResultsContainer