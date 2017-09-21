
export function fetchUsers() {
	return function(dispatch) {
		fetch('http://localhost:3000/api/v1/users')
      		.then(res => res.json())
      		.then(json => {
      			dispatch({type: "FETCHED_USERS", payload: json})
      		})
	}
}

export function createUser(data) {
	return function(dispatch) {
	    const requestInfo = {
	      method: 'POST',
	      body: JSON.stringify({data}),
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/users', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "CREATED_USER", payload: json})
	      })
	}
}