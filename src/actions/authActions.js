export function loginUser(data, history) {
	return function(dispatch) {
		const userJSON = JSON.stringify(data)
	    const requestInfo = {
	      method: 'POST',
	      body: userJSON,
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/login', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "LOGGED_IN", payload: json})
	      })
	      
	     
	}
}

export function logoutUser() {
	return function(dispatch) {
		return dispatch({type: "LOGGED_OUT"})
	}
}

export function confirmCurrentUser(data) {
	return function(dispatch) {
		return fetch('http://localhost:3000/api/v1/me',{
		      headers:{
		        "Authorization":`Bearer ${data}`,
		        "Accept":"application/json"
		      }
		    })
	    .then(res => res.json())
	    .then(json => {
	    	dispatch({type: "CONFIRMED_CURRENT_USER", payload: json})
    	})
	}
}