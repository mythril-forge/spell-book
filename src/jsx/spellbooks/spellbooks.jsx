// import react modules
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom'

// import components
import Navbar from '../navbar.jsx'

// define component item
const Spellbooks = () => {
	return (
		<div className='base'>
			<Navbar />
			<h1>Spellbook Library</h1>
			<ul>
				<Link to='/books/000'>
					<li>
						<h2>Starlow Wierdword</h2>
						<p>Level 4 Human Fighter</p>
					</li>
				</Link>
				<Link to='/books/000'>
					<li>
						<h2>Fiora Hellsword</h2>
						<p>Level 8 Minotaur Barbarian</p>
					</li>
				</Link>
				<Link to='/books/000'>
					<li>
						<h2>Zoltan Bluebeard</h2>
						<p>Level 2 Human Wizard</p>
					</li>
				</Link>
			</ul>
			<div>
				<Link to='/books/new' tabIndex='0' className='button'>
					New Spellbook
				</Link>
			</div>
		</div>
	)
}

export default Spellbooks
