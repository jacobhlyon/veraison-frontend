function authReducer(state = {currentUser: {}}, action) {
	switch (action.type) {
		case "LOGGED_IN":
			localStorage.setItem("token", action.payload.jwt)
			return Object.assign({}, state, {currentUser: action.payload.user})
		case "LOGGED_OUT":
			localStorage.removeItem("token")
			return Object.assign({}, state, {currentUser: {}})
		case "CONFIRMED_CURRENT_USER":
			return Object.assign({}, state, {currentUser: action.payload})
		default:
			return state
	}
}

export default authReducer