function authReducer(state = {}, action) {
	switch (action.type) {
		case "LOGGED_IN":
			localStorage.setItem("token", action.payload.jwt)
			return Object.assign({}, state, {current_user: action.payload.user})
		case "LOGGED_OUT":
			localStorage.removeItem("token")
			return Object.assign({}, state, {current_user: {}})
		default:
			return state
	}
}

export default authReducer