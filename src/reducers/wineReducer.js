function wineReducer(state ={}, action) {
	switch(action.type) {
		case "WINE_SEARCH_RESULTS":
			console.log(action.payload.wines)
			return Object.assign({}, state, {wineSearchResults: action.payload.wines})
		default:
			return state
	}
}

export default wineReducer