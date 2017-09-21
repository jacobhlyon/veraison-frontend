export function loginUser(data) {
	return function(dispatch) {
		console.log("I should be second - hit login user auth action", data)
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