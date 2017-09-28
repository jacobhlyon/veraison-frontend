
export function searchNewWine(winery, varietal, vintage) {
	return function(dispatch) {
		return fetch(`http://api.snooth.com/wines/?akey=6dq1avtmtsp562d932xzhdhtpdwycu9ivmbus921nkru0jrn&q=${winery}+${varietal}+${vintage}`)
			.then(res => res.json())
			.then(json => {
				dispatch({type: "WINE_SEARCH_RESULTS", payload: json})
			})
	}
}

export function persistWine(data) {
	return function(dispatch) {
		console.log(data)
	    const requestInfo = {
	      method: 'POST',
	      body: JSON.stringify({data}),
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/wines', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "PERSISTED_WINE", payload: json})
	      })
	}
}

export function createWineScore(data) {
	return function(dispatch) {
	    const requestInfo = {
	      method: 'POST',
	      body: JSON.stringify({data}),
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/wine_scores', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "CREATED_WINE_SCORE", payload: json})
	      })
	}
}

export function createSightScore(data) {
	return function(dispatch) {
	    const requestInfo = {
	      method: 'POST',
	      body: JSON.stringify({data}),
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/sight_scores', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "CREATED_SIGHT_SCORE", payload: json})
	      })
	}
}

export function createNoseScore(data) {
	return function(dispatch) {
	    const requestInfo = {
	      method: 'POST',
	      body: JSON.stringify({data}),
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/nose_scores', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "CREATED_NOSE_SCORE", payload: json})
	      })
	}
}

export function createPalateScore(data) {
	return function(dispatch) {
	    const requestInfo = {
	      method: 'POST',
	      body: JSON.stringify({data}),
	      headers: {
	        "Content-Type":"application/json",
	        "Accept":"application/json"
	      }
	    }
	    return fetch('http://localhost:3000/api/v1/palate_scores', requestInfo)
	      .then(res => res.json())
	      .then(json => {
	      	dispatch({type: "CREATED_PALATE_SCORE", payload: json})
	      })
	}
}

export function fetchAllWines() {
	return function(dispatch) {
		return fetch('http://localhost:3000/api/v1/wines')
			.then(res => res.json())
			.then(json => {
				dispatch({type: "FETCHED_ALL_WINES", payload: json})
			})
	}
}


