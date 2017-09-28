function usersReducer(state = {}, action) {

	switch (action.type) {
		case "FETCHED_USERS":
			return Object.assign({}, state, {allUsers: action.payload})
		case "CREATED_USER":
			localStorage.setItem("token", action.payload.jwt)
			return Object.assign({}, state, {current_user: action.payload})
		case "FETCHED_USER_WINE_SCORES":
			console.log(action.payload)
			return Object.assign({}, state, {currentUserWineScores: action.payload})
		default:
			return state
	}
}

export default usersReducer