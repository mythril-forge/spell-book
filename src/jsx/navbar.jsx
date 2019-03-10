// import react modules
import React, { Component } from 'react'

// import components
import { BrowserRouter as Link } from 'react-router-dom';

// define component item
class Navbar extends Component {
	render() {
		return (
			<span>
				<Link><span>My Spellbooks</span></Link>
				<Link><span></span></Link>
			</span>
		)
	}
}

export default Navbar
