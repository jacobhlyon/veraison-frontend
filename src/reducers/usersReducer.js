function usersReducer(state = {}, action) {

	switch (action.type) {
		case "FETCHED_USERS":
			return Object.assign({}, state, {allUsers: action.payload})
		case "CREATED_USER":
			localStorage.setItem("token", action.payload.jwt)
			return Object.assign({}, state, {current_user: action.payload})
		case "FETCHED_USER_WINES":
			return Object.assign({}, state, {currentUserWines: action.payload})
		default:
			return state
	}
}

export default usersReducer