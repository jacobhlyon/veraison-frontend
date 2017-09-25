function wineReducer(state ={}, action) {
	switch(action.type) {
		case "WINE_SEARCH_RESULTS":
			console.log(action.payload)
			return state
		default:
			return state
	}
}

export default wineReducer