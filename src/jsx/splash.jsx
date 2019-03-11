// import react modules
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import other local assets
import dndAmp from '../img/dnd-amp.svg'
import github from '../img/github.svg'

// define component item
const Splash = () => {
	return (
		<div>

			<div id='hero' />

			<div id='home'>
				<h1>Lost Arts</h1>

				<Link to='./books' tabIndex='0' className='button'>Get Started</Link>

				<a href='https://github.com/noltron000/spell-book'>
					{/* would use font-awesome but cant use vh+vw w/fonts in css */}
					<img className='git logo' src={github} alt='made with github' />
				</a>

				<a href='http://dnd.wizards.com/dungeons-and-dragons/what-is-dd'>
					{/* would use font-awesome but cant use vh+vw w/fonts in css */}
					<img className='dnd logo' src={dndAmp} alt='for d&amp;d 5e' />
				</a>
			</div>

			<footer id='info'>
				<p><a href='https://facebook.com' className='facebook social-media'><FontAwesomeIcon icon={['fab', 'facebook-f']} /> Facebook</a></p>
				<p><a href='https://twitter.com' className='twitter social-media'><FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter</a></p>
				<span />
				<p><Link to='/about' className='social-media'>About</Link></p>
			</footer>

		</div>
	)
}

export default Splash
