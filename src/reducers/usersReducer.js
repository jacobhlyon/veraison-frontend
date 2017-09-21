function usersReducer(state = {allUsers: []}, action) {

	switch (action.type) {
		case "FETCHED_USERS":
			return Object.assign({}, state, {allUsers: action.payload})
		case "CREATED_USER":
		console.log(action.payload)
			localStorage.setItem("token", action.payload.jwt)
			return Object.assign({}, state, {current_user: action.payload.user})
		default:
			return state
	}
}

export default usersReducer