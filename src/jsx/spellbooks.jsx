// import react modules
import React from 'react'

// import components
import { BrowserRouter as Route, Link } from 'react-router-dom';

// define component item
const Spellbooks = () => {
	return (
		<div>
			<h1>Spellbooks</h1>
			<Link to='/books/new'><span>Create New</span></Link>
		</div>
	)
}

export default Spellbooks
