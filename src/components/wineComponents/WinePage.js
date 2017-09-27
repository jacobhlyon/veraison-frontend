import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'

class WinePage extends React.Component {

	render() {
		console.log(this.props)
		return(
			<div>
				<Card className="ui container center aligned">
					<Image className="ui container center aligned" src={this.props.wine.currentWine.image} size="small"/>
					<Card.Content>
						<Card.Header>
						{this.props.wine.currentWine.name}
						</Card.Header>
					</Card.Content>
				</Card>
			</div>
		)
	}

}

function mapStateToProps(state){
	return {
		wine: state.wine,
		auth: state.auth
	}
}

export default connect(mapStateToProps)(WinePage)