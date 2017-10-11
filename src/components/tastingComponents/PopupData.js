import React from 'react'
import { Popup, Image } from 'semantic-ui-react'

export const clarity = <Popup
	trigger={<Image size="tiny" src={require('../../images/002-drink-1.png')} />} position='bottom center'>
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
			Wines will often have a secondary color or hue, often due to its age or if it has been aged in wood. Red wines can have a variety of other shades due to the color of the skin.
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

export const faults_popup = <Popup
	trigger={<Image size="tiny" src={require('../../images/028-egg.png')} />} position='bottom center' wide>
	<Popup.Header>Faults</Popup.Header>
		<Popup.Content>
			Wines can have specific faults that make it smell or taste off. Some are due to yeast strains or microbes, and some are due to the aging process.
		</Popup.Content>
		<br />
	<Popup.Header>Specific Faults</Popup.Header>
		<Popup.Content>
			<ul>
				<li>TCA (Trichloroanisole) - A bacteria that lives in cork that can make wine smell musty. Often referred to as 'corked' wine. Smells like wet cardboard or a musty basement.</li>
				<li>Brettanomyces - A strain of yeast that gives the wine an animal or barnyard smell. Small amounts may not be considered a fault. It is the same yeast that gives sour beers their distinct flavor.</li>
				<li>H2S (Hydrogen Sulfide) - Smells like rotten eggs. Can be caused by too much sulfites, yeast combined with sulfur, or a lack of nutrients.</li>
				<li>Volatile Acidity - Wine smells like vinegar.</li>
				<li>Ethyl Acetate - Part of the fermentation, where wine can smell like nail polish remover. Needs to reach scent threshold to be an issue.</li>
				<li>Oxidation - This is a nuttiness or cooked-fruit scent that happens to wine when it oxidizes. The wine can smell 'flat'. It is a defining charactaristic of sherry.</li>
			</ul>
		</Popup.Content>
</Popup>

export const intensity = <Popup
	trigger={<Image size="tiny" src={require('../../images/009-fire.png')} />} position='left center'>
	<Popup.Header>Intensity</Popup.Header>
		<Popup.Content>
			How intense is the smell of the wine? Some are quite delicate, and some are very powerful.
		</Popup.Content>
</Popup>

export const nose_age = <Popup
	trigger={<Image size="tiny" src={require('../../images/013-feeding-bottle.png')} />} position='left center'>
	<Popup.Header>Age</Popup.Header>
		<Popup.Content>
			When wines are young, they typically smell of tart or fresh fruit. The older they get, the more dried or raisin-like they become.
		</Popup.Content>
</Popup>

export const nose_fruit = <Popup
	trigger={<Image size="tiny" src={require('../../images/031-cherry.png')} />} position='left center'>
	<Popup.Header>Fruit</Popup.Header>
		<Popup.Content>
			In order to conceptualize what fruit is present in a wine, we often group them together by similar color and theme. For example citrus can smell sharp or acidic, while black fruit can smell deep and rich like currants.
		</Popup.Content>
		<br />
	<Popup.Header>Fruit Character</Popup.Header>
		<Popup.Content>
			Does the fruit smell more tart or very ripe? Think of how a peach can go from smelling very delicate when it is underripe to jammy and alcohol as it ripens.
		</Popup.Content>
		<br />
	<Popup.Header>Fruit Description</Popup.Header>
		<Popup.Content>
			Combine the fruit and its character to write a condensed fruit description like 'tart and underripe green apple'.
		</Popup.Content>
</Popup>

export const nose_non_fruit = <Popup
	trigger={<Image size="tiny" src={require('../../images/021-food-1.png')} />} position='left center'>
	<Popup.Header>Non-Fruit</Popup.Header>
		<Popup.Content>
			Wines can have baking spice scents from aging in wood, and some white wines can have very green and herbal notes.
		</Popup.Content>
		<br />
	<Popup.Header>Organic Earth</Popup.Header>
		<Popup.Content>
			Old World red wines are known for having non-fruit forward noses, meaning they smell like soil or mushrooms than ripe cherries.
		</Popup.Content>
		<br />
	<Popup.Header>Inorganic Earth</Popup.Header>
		<Popup.Content>
			Is there any stone or slate present in the nose? People often describe wine as having a 'mineral' scent.
		</Popup.Content>
</Popup>

export const nose_wood = <Popup
	trigger={<Image size="tiny" src={require('../../images/036-nature.png')} />} position='left center'>
	<Popup.Header>Wood Present?</Popup.Header>
		<Popup.Content>
			Most red wines and some white wines are aged in wood. You can tell by a woody, baking-spice, or burnt smell.
		</Popup.Content>
		<br />
	<Popup.Header>Wood Type</Popup.Header>
		<Popup.Content>
			Amerian wood barrels tend to have notes of coconut or dill, and French wood barrels tend to err on the side of nutmeg or baking spices.
		</Popup.Content>
		<br />
	<Popup.Header>Wood Age</Popup.Header>
		<Popup.Content>
			As barrels are reused for different vintages of wine, the flavor they can impart to the wine becomes diluted. Are the wood notes very strong, or are they muted?
		</Popup.Content>
</Popup>

export const sweetness = <Popup
	trigger={<Image size="tiny" src={require('../../images/001-food-3.png')} />} position='left center'>
	<Popup.Header>Sweetness</Popup.Header>
		<Popup.Content>
			Do not confuse fruit flavor with sweetness. If a wine is sweet it will have a fuller feel on the palate, and will often taste more viscus.
		</Popup.Content>
</Popup>

export const palate_fruit = <Popup
	trigger={<Image size="tiny" src={require('../../images/031-cherry.png')} />} position='left center'>
	<Popup.Header>Fruit</Popup.Header>
		<Popup.Content>
			What fruit and characteristics dominate when you taste? We will compare if they are the same that the nose had.
		</Popup.Content>
</Popup>

export const palate_non_fruit = <Popup
	trigger={<Image size="tiny" src={require('../../images/021-food-1.png')} />} position='left center'>
	<Popup.Header>Non-Fruit</Popup.Header>
		<Popup.Content>
			What non-fruit and characteristics dominate when you taste? We will compare if they are the same that the nose had.
		</Popup.Content>
</Popup>

export const palate_wood = <Popup
	trigger={<Image size="tiny" src={require('../../images/036-nature.png')} />} position='left center'>
	<Popup.Header>Non-Fruit</Popup.Header>
		<Popup.Content>
			Wines aged in wood will have the same baking spice or burnt flavor as they did on the nose. Wood can also impart additional tannins when you taste. Coconut or dill flavor will denote American wood, while baking spices are usually French wood.
		</Popup.Content>
</Popup>

export const bitter_tannin = <Popup
	trigger={<Image size="tiny" src={require('../../images/030-grapes.png')} />} position='left center'>
	<Popup.Header>Bitter, Phenolic (White Wine Only)</Popup.Header>
		<Popup.Content>
			White Wines can taste bitter or astringic due to an imbalance of alcohol or other oily characteristics.
		</Popup.Content>
		<br />
	<Popup.Header>Tannin (Red Wine Only)</Popup.Header>
		<Popup.Content>
			Tannins are the mouth-drying or 'cat-tongue' feeling after you drink wine. Depending on how tannic the wine is, they can cover a short part of your tongue or coat your entire mouth. White Wines will almost always be marked 'Low'.
		</Popup.Content>
</Popup>

export const acid_alcohol = <Popup
	trigger={<Image size="tiny" src={require('../../images/011-drink.png')} />} position='left center'>
	<Popup.Header>Acid</Popup.Header>
		<Popup.Content>
			Acidic wines give a tingling sensation at your salivary glands (back of your mouth near your molars.) Imagine the feeling if you sucked on a lemon wedge.
		</Popup.Content>
		<br />
	<Popup.Header>Alcohol</Popup.Header>
		<Popup.Content>
			High alcohol often is described as feeling 'hot' in the throat. A wine can have a high alcohol content and still be in balance, while a wine can have a low alcohol content and still taste very alcoholic or hot as it is out of balance.
		</Popup.Content>
</Popup>

export const body_texture = <Popup
	trigger={<Image size="tiny" src={require('../../images/010-diamond.png')} />} position='left center'>
	<Popup.Header>Body</Popup.Header>
		<Popup.Content>
			Does the wine feel heavy on your tongue? Some wines feel very heavy in your mouth, while others are light like water.
		</Popup.Content>
		<br />
	<Popup.Header>Texture</Popup.Header>
		<Popup.Content>
			Very acidic wines usually have a lean texture, but some have a rounder or creamy feeling. Imagine a sharp Sauvignon Blanc compared to a rich and buttery Chardonnay from Napa Valley.
		</Popup.Content>
</Popup>

export const length_complexity = <Popup
	trigger={<Image size="tiny" src={require('../../images/007-tool.png')} />} position='left center'>
	<Popup.Header>Length</Popup.Header>
		<Popup.Content>
			How long does the flavor of the wine stay on your palate after you swallow or spit? Some wines have a long length, while others can be quite short.
		</Popup.Content>
		<br />
	<Popup.Header>Complexity</Popup.Header>
		<Popup.Content>
			This is almost a culmination of all other aspects we have rated so far. A simple wine will have one dominating flavor, and probably will not have a long finish. Very complex wines can change characteristics with each sip.
		</Popup.Content>
</Popup>
