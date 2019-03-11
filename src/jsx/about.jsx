// import react modules
import React from 'react'

// import components
import Navbar from './navbar.jsx'

// define component item
const Spellbooks = () => {
	return (
		<div>
			<h1 class='branding'>Logo Font</h1>
			<Navbar />
			<h1>About</h1>
			<p>I created this app for a few reasons. One, because the D&amp;D community needs more good free open source. Two, to test out Progressive Web Apps in the Google Play Store. Three, because I want to highly customize this app to work with my convoluted homebrews.</p>
			<h2>Testing Headings</h2>
			<p>This is another paragraph after headings. <a href=''>Anchor tag!</a> Check out this further sentance making the paragraph longer.</p>
			<ul>
				<li> Listing items.</li>
				<li> Listing items.</li>
				<li> Listing items.</li>
			</ul>
			<h3>Smaller Headings are Cool Too!</h3>
			<p>No way! That's really amazing. Can you say... ORDERED LIST? (yes, yes you can)</p>
			<ol>
				<li> Listing items.</li>
				<li> Listing items.</li>
				<li> Listing items.</li>
			</ol>

		</div>
	)
}

export default Spellbooks
