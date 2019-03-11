// import react modules
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom'

// import components
import Navbar from './navbar.jsx'

// define component item
const ShowSpellbook = () => {
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
			<Link to='/books/000/edit' tabIndex='0' className='button'>Edit Spellbook</Link>
		</div>
	)
}

export default ShowSpellbook
