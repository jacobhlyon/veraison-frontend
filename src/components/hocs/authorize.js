import React from 'react'

function authorize(RenderedComponent, props){
	return class extends React.Component {
		componentWillMount() {
			if (!localStorage.getItem('token') && this.props.location.pathname != "login") {
				this.props.history.push("/login")
			} else {

			}
		}

		render() {
			reutrn (<RenderedComponent {...props} {...this.props} />)
		}
	}
}

export default authorize