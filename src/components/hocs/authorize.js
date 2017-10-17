import React from 'react'


function authorize(RenderedComponent, props){
  return class extends React.Component {

    state = {
      hasError:false
    }
    
    componentWillMount() {
        if (!localStorage.getItem('token') && this.props.location.pathname !== "login" && this.props.location.pathname !== '/' && this.props.location.pathname !== '/signup') {
          this.props.history.push("/login")
        } else {
        }
    }

    componentDidCatch(error, info) {
      console.log(error, info, "this is the error console log")
        this.setState({
          hasError: true
        })
    }

    render() {

      if (this.state.hasError) {
        return <h1>Something went wrong. Please return home</h1>
      } else {

       return (<RenderedComponent {...props} {...this.props}/>)
        
      }

    }
  }
}

export default authorize