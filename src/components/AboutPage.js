import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const AboutPage = () => {
	return (
		<Container text>
			<Header as='h2' >What is Veraison?</Header>
			<p>Veraison is a wine-tasting app designed to help wine professionals keep track of and compare tasting notes.</p>
			<p>It is based on the deductive tasting grid from the <a href='http://www.courtofmastersommeliers.org/other/deductive-tasting-grid/'>Court of Master Sommeliers</a> to help improve your palate. The idea is that objectively tasting wine looking for the same critera will help increase palate awareness and allow you to distinguish the nuances in different wines.</p>
			<p>Veraison allows you to search for the specific wine you are tasting, guides you through the tasting process, and then shows your results compared to the average of all other users. This will help you know if you're tasting the same as everyone else!</p>
			<p>Practice makes perfect :)</p>
		</Container>
	)
}

export default AboutPage