function usersReducer(state = {allUsers: []}, action) {

	switch (action.type) {
		case "FETCHED_USERS":
			return Object.assign({}, state, {allUsers: action.payload})
		default:
			return state
	}
}

export default usersReducer