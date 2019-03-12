// import react modules
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom'

// import components
import Navbar from '../navbar.jsx'

// define component item
const ShowSpellbook = () => {
	return (
		<div className='base'>
			<Navbar />
			<h1>Zoltan Bluebeard</h1>
			<ul>
				<Link to='/spells/000'>
					<li>
						<h3>Fireball</h3>
						<p>Tier 3 Evocation</p>
					</li>
				</Link>
				<Link to='/spells/000'>
					<li>
						<h3>Eldritch Blast</h3>
						<p>Tier 0 Evocation</p>
					</li>
				</Link>
				<Link to='/spells/000'>
					<li>
						<h3>Cure Wounds</h3>
						<p>Tier 1 Evocation</p>
					</li>
				</Link>
			</ul>
			<Link to='/books/000/edit' tabIndex='0' className='button'>Edit Spellbook</Link>
		</div>
	)
}

export default ShowSpellbook
