// import react modules
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom'

// define component item
class Navbar extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link to='/'>home</Link></li>
					<li><Link to='/books'>spellbook library</Link></li>
					<li><Link to='/spells'>spell compendium</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Navbar
