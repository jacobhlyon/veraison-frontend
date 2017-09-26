import React from 'react'
import { connect } from 'react-redux'

class WinePage extends React.Component {

	render() {
		console.log(this.props)
		return(
			<div> I AM THE WINE PAGE </div>
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