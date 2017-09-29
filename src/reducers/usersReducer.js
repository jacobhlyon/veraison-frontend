function usersReducer(state = {allUsers: [], currentUserWines: []}, action) {

	switch (action.type) {
		case "FETCHED_USERS":
			return Object.assign({}, state, {allUsers: action.payload})
		case "FETCHED_USER_WINES":
			return Object.assign({}, state, {currentUserWines: action.payload})
		default:
			return state
	}
}

export default usersReducer