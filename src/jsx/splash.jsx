// import react modules
import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";

// define component item
const Splash = () => {
	return (
		<div id='hero'>
			<h1>Witty Title</h1>
			<Link to='./books'><span tabIndex='0' className='button'>Craft Spellbook</span></Link>
		</div>
	)
}

export default Splash
