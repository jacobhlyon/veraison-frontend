function wineReducer(state ={allWines: {}}, action) {
	switch(action.type) {
		case "WINE_SEARCH_RESULTS":
			return Object.assign({}, state, {wineSearchResults: action.payload.wines})
		case "PERSISTED_WINE":
			return Object.assign({}, state, {currentWine: action.payload})
		case "CREATED_WINE_SCORE":
			return Object.assign({}, state, {currentWineScore: action.payload})
		case "CREATED_SIGHT_SCORE":
			return Object.assign({}, state, {currentSightScore: action.payload})
		case "CREATED_NOSE_SCORE":
			return Object.assign({}, state, {currentNoseScore: action.payload})
		case "CREATED_PALATE_SCORE":
			return Object.assign({}, state, {currentPalateScore: action.payload})
		case "FETCHED_ALL_WINES":
			return Object.assign({}, state, {allWines: action.payload})	
		case "FETCHED_ALL_SCORES_FOR_WINE":
			return Object.assign({}, state, {currentNoseScore: action.payload.nose_score[0], currentSightScore: action.payload.sight_score[0], currentPalateScore: action.payload.palate_score[0], currentWine: action.payload.wine})
		default:
			return state
	}
}

export default wineReducer