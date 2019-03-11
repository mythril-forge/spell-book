// import react modules
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom'

// import components
import Navbar from './navbar.jsx'

// define component item
const Spellbooks = () => {
	return (
		<div>
			<Navbar />
			<h1>Spellbook Library</h1>
			<ul>
				<li><Link to='/books/000'>Hello</Link></li>
				<li>Fiora Hellsword</li>
				<li>Zoltan Bluebeard</li>
			</ul>
			<Link to='/books/new' tabIndex='0' className='button'>Create New</Link>
		</div>
	)
}

export default Spellbooks
