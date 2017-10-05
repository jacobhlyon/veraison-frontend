function wineReducer(state ={allWines: {}}, action) {
	switch(action.type) {
		case "WINE_SEARCH_RESULTS":
			return Object.assign({}, state, {wineSearchResults: action.payload.wines})
		case "PERSISTED_WINE":
			localStorage.setItem("currentWine", action.payload)
			return Object.assign({}, state, {currentWine: action.payload})
		case "CREATED_WINE_SCORE":
			localStorage.setItem("currentWineScore", action.payload)
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
			localStorage.setItem("currentWineObject", JSON.stringify(action.payload.allScores.wine.id))
			console.log(action.payload.allScores.wine.id)
			localStorage.setItem("currentWineScoreId", action.payload.allScores.sight_score[0].wine_score_id)
			return Object.assign({}, state, {currentNoseScore: action.payload.allScores.nose_score[0], 
				currentSightScore: action.payload.allScores.sight_score[0], currentPalateScore: action.payload.allScores.palate_score[0], 
				currentWine: action.payload.allScores.wine, avgPalateScores: action.payload.palate})
		default:
			return state
	}
}

export default wineReducer