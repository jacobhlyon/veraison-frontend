import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/authActions'

class NavBar extends React.Component {
	state = {
		activeItem: 'home'
	}


	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name
		})
	}

	handleLogOut = (event) => {
		this.props.logoutUser()
	}

	render() {
		const { activeItem } = this.state

		return(
			<Menu inverted>
				<Menu.Item name='home' href='/profile' onClick={this.handleItemClick} />
				<Menu.Item name='wineSearch' href='/winesearch' onClick={this.handleItemClick} />
				<Menu.Menu position='right'>
					<Menu.Item>
						<Button primary href='/login'>Log In</Button>
					</Menu.Item>
					<Menu.Item>
						<Button primary href='/' onClick={this.handleLogOut}>Log Out</Button>
					</Menu.Item>
				</Menu.Menu>

			</Menu>		
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({logoutUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)