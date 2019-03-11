// import react modules
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom'

// import other local assets
import dndSmall from '../img/dnd-small.svg'
import octocat from '../img/octocat.svg'

// define component item
const Splash = () => {
	return (
		<div>
			<div id='hero' />

			<div id='home'>
				<h1>Lost Arts</h1>

				<Link to='./books' tabIndex='0' className='button'>Get Started</Link>

				<a href='https://github.com/noltron000/spell-book'>
					<img className='git proof' src={octocat} alt='made with github' />
				</a>

				<a href='http://dnd.wizards.com/dungeons-and-dragons/what-is-dd'>
					<img className='dnd proof' src={dndSmall} alt='for d&amp;d 5e' />
				</a>
			</div>

			<footer id='info'>
				<p>twitter</p>
				<p>facebook</p>
				<p>about</p>
			</footer>

		</div>
	)
}

export default Splash
