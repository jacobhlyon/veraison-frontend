import React from 'react'
import { Popup, Image } from 'semantic-ui-react'

export const clarity = <Popup
	trigger={<Image size="tiny" src={require('../../images/002-drink-1.png')} />} position='left center'>
	<Popup.Header>Clarity</Popup.Header>
		<Popup.Content>
			Wines are often filtered to remove any unwanted yeast/microbes/particles that could influence the taste, a common practice in New World wines. Old World wines may not be filtered, thus they may have a haze.
		</Popup.Content>
		<br />
	<Popup.Header>Visible Sediment</Popup.Header>
		<Popup.Content>
			As red wines age, they can develop sediment from the tannins and color pigments falling out of suspension. White wines may have crystals called tartrates due to how they were bottled.
		</Popup.Content>
		<br />
	<Popup.Header>Concentration</Popup.Header>
		<Popup.Content>
			How concentrated is the color?
		</Popup.Content>
</Popup>

export const white_sight = <Popup
	trigger={<Image size="tiny" src={require('../../images/015-apple-1.png')} />} position='left center'>
	<Popup.Header>White Primary Color</Popup.Header>
		<Popup.Content>
			Tilt the glass at a 45 degree angle and examine the color against a white background. What is the primary color you see?
		</Popup.Content>
		<br />
	<Popup.Header>White Secondary Color</Popup.Header>
		<Popup.Content>
			Wines will often have a secondary color or hue, often due to its age or if it has been aged in wood. Older white wines or wines with wood typically have darker tones to them.
		</Popup.Content>
</Popup>

export const red_sight = <Popup
	trigger={<Image size="tiny" src={require('../../images/025-strawberry.png')} />} position='left center'>
	<Popup.Header>Red Primary Color</Popup.Header>
		<Popup.Content>
			Tilt the glass at a 45 degree angle and examine the color against a white background. What is the primary color you see?
		</Popup.Content>
		<br />
	<Popup.Header>Red Secondary Color</Popup.Header>
		<Popup.Content>
			Wines will often have a secondary color or hue, often due to its age or if it has been aged in wood. Red wines can have a variety of other shades due to the color of the grape's skin.
		</Popup.Content>
</Popup>

export const rim_variation = <Popup
	trigger={<Image size="tiny" src={require('../../images/026-cup.png')} />} position='left center'>
	<Popup.Header>Rim Variation</Popup.Header>
		<Popup.Content>
			Continue to tilt the glass at a 45 degree angle and examine the color against a white background. Is there a large difference between the center color and the rim color? As wines age, the colors become different.
		</Popup.Content>
		<br />
	<Popup.Header>Staining</Popup.Header>
		<Popup.Content>
			Place the glass firmly on the table and swirl in a circle. Examine the sides after you swirl. Does the color continue to stain the glass? Malbecs are known for leaving a purple stain on their glass after swirling.
		</Popup.Content>
		<br />
	<Popup.Header>Tearing</Popup.Header>
		<Popup.Content>
			Swirl the glass and examine the edges. The tears or 'legs' are an indication of how much sugar and alcohol is present in the wine. Sugary wines tend to be more viscus and have 'longer' tears. A wine may not necessarily be sweet with long legs, as alcohol and tannin can balance out the sugar.
		</Popup.Content>
</Popup>

export const gas_evidence = <Popup
	trigger={<Image size="tiny" src={require('../../images/012-champagne.png')} />} position='left center'>
	<Popup.Header>Gas Evidence</Popup.Header>
		<Popup.Content>
			Are there any bubbles or evidence of gas? Some white wines like Vinho Verde have a slight carbonation as well.
		</Popup.Content>
</Popup>


