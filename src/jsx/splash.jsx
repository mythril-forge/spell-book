// import react modules
import React from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";

// import other local assets
import logoSmall from '../img/logo-small.svg'
import octocat from '../img/octocat.svg'

// define component item
const Splash = () => {
	return (
		<div>
			<div id='hero'>
				<a href='http://dnd.wizards.com/dungeons-and-dragons/what-is-dd'>
					<img className='brandproof' src={logoSmall} alt='D&amp;D 5e' />
				</a>
				<a href='https://github.com/noltron000/spell-book'>
					<img className='gitproof' src={octocat} alt='made with github' />
				</a>
				<h1>Lost&emsp;Arts</h1>
				<Link to='./books/new'><span tabIndex='0' className='button'>Craft Spellbook</span></Link>
			</div>
		</div>
	)
}

export default Splash
