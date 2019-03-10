// import react modules
import React, { Component } from 'react'

// import components
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './splash.jsx'
import Spellbooks from './spellbooks.jsx'

// import other local assets
import '../css/app.css'

// define component item
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Splash} />
					<Route exact path='/books' component={Spellbooks} />
				</div>
			</Router>
		)
	}
}

export default App
