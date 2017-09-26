
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



