import React from 'react'
import { Menu, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/authActions'

class NavBar extends React.Component {




	handleLogOut = (event) => {
		this.props.logoutUser()
	}

	render() {
		if (localStorage.getItem('token') !== null) {

			return(
				<Menu inverted>
					<Menu.Item name='home' href='/profile' />
					<Menu.Item name='wineSearch' href='/winesearch' />
					<Menu.Item name='about' href='/about' />
					<Menu.Menu position='right'>
						<Menu.Item>
							<Button primary href='/' onClick={this.handleLogOut}>Log Out</Button>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			)
		} else {
			return(
				<Menu inverted>
					<Menu.Item name='Welcome' />
					<Menu.Item name='about' href='/about' />

					<Menu.Menu position='right'>
						<Menu.Item>
							<Button primary href='/login'>Log In</Button>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			)
		}
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({logoutUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)
