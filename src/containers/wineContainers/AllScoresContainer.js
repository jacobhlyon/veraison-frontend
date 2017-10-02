import React from 'react'
import SightScoreContainer from './SightScoreContainer'
import NoseScoreContainer from './NoseScoreContainer'
import PalateScoreContainer from './PalateScoreContainer'

class AllScoresContainer extends React.Component {

	render() {

		if (this.props.currentScore === "Sight") {
			return (
				<SightScoreContainer score={this.props.scoreInfo.currentSightScore}/>
			)
		} else if (this.props.currentScore === "Nose") {
			return (
				<NoseScoreContainer score={this.props.scoreInfo.currentNoseScore}/>
			)
		} else if (this.props.currentScore === "Palate") {
			return (
				<PalateScoreContainer score={this.props.scoreInfo.currentPalateScore}/>
			)
		} else {
			<div>Something went wrong</div>
		}


	}

}

export default AllScoresContainer