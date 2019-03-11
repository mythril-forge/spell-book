// import react modules
import React from 'react'

// import components
import Navbar from './navbar.jsx'

// define component item
const NewSpellbook = () => {
	return (
		<div>
			<Navbar />
			<h1>Spellbook</h1>
			<h2>Lorem Ipsum</h2>
			<ul>
				<li>Firebolt</li>
				<li>Fireball</li>
				<li>Ice Sphere</li>
				<li>Iceball</li>
				<li>Green Flame</li>
				<li>Eldritch Blast</li>
			</ul>
			<button>Edit Spellbook</button>
		</div>
	)
}

export default NewSpellbook
