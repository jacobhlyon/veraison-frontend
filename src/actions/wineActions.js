
export function searchNewWine(winery, varietal, vintage) {
	return function(dispatch) {
		fetch(`http://api.snooth.com/wines/?akey=6dq1avtmtsp562d932xzhdhtpdwycu9ivmbus921nkru0jrn&q=${winery}+${varietal}+${vintage}`)
			.then(res => res.json())
			.then(json => {
				dispatch({type: "WINE_SEARCH_RESULTS", payload: json})
			})
	}
}



