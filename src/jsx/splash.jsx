// import react modules
import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";

// import other local assets
import logoSmall from '../img/logo-small.svg'

// define component item
const Splash = () => {
	return (
		<div>
			<div id='hero'>
				<img id='brandproof' src={logoSmall} alt='D&amp;D 5e'/>
				<h1>Lost&emsp;Arts</h1>
				<Link to='./books'><span tabIndex='0' className='button'>Craft Spellbook</span></Link>
			</div>
		</div>
	)
}

export default Splash
