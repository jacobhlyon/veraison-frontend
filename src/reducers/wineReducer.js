function wineReducer(state ={currentWine: {}}, action) {
	switch(action.type) {
		case "WINE_SEARCH_RESULTS":
			return Object.assign({}, state, {wineSearchResults: action.payload.wines})
		case "PERSISTED_WINE":
			return Object.assign({}, state, {currentWine: action.payload})
		case "CREATED_WINE_SCORE":
			return Object.assign({}, state, {currentWineScore: action.payload})
		case "CREATED_SIGHT_SCORE":
			console.log("I created a sight score", action.payload)
			return Object.assign({}, state, {currentSightScore: action.payload})
		case "CREATED_NOSE_SCORE":
					console.log("I created a nose score", action.payload)
			return Object.assign({}, state, {currentNoseScore: action.payload})
		case "CREATED_PALATE_SCORE":
					console.log("I created a palate score", action.payload)
			return Object.assign({}, state, {currentPalateScore: action.payload})
		default:
			return state
	}
}

export default wineReducer