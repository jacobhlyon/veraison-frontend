function usersReducer(state = {currentUser: {}}, action) {

	switch (action.type) {
		case "FETCHED_USERS":
			return Object.assign({}, state, {allUsers: action.payload})
		case "CREATED_USER":
		console.log(action.payload)
			localStorage.setItem("token", action.payload.jwt)
			return Object.assign({}, state, {current_user: action.payload})
		default:
			return state
	}
}

export default usersReducer