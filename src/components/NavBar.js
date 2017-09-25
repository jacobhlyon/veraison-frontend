import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

class NavBar extends React.Component {
	state = {
		activeItem: 'home'
	}


	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name
		})
	}

	render() {
		const { activeItem } = this.state

		return(
			<Menu inverted>
				<Menu.Item name='home' href='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
				<Menu.Item name='wineSearch' href='/winesearch' onClick={this.handleItemClick} />
				<Menu.Menu position='right'>
					<Menu.Item>
						<Button primary href='/login'>Log In</Button>
					</Menu.Item>
				</Menu.Menu>

			</Menu>		
		)
	}
}

export default NavBar