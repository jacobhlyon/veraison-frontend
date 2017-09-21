
export function fetchUsers() {
	return function(dispatch) {
		fetch('http://localhost:3000/api/v1/users')
      		.then(res => res.json())
      		.then(json => {
      			dispatch({type: "FETCHED_USERS", payload: json})
      		})
	}
}