function wineReducer(state ={currentWine: {}}, action) {
	switch(action.type) {
		case "WINE_SEARCH_RESULTS":
			return Object.assign({}, state, {wineSearchResults: action.payload.wines})
		case "PERSISTED_WINE":
			return Object.assign({}, state, {currentWine: action.payload})
		case "CREATED_WINE_SCORE":
			return Object.assign({}, state, {currentWineScore: action.payload})
		default:
			return state
	}
}

export default wineReducer