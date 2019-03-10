// import react modules
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import components
import Splash from './splash.jsx'
import Spellbooks from './spellbooks.jsx'
import NewSpellbook from './spellbooks-new.jsx'
import ShowSpellbook from './spellbooks-show.jsx'

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
					<Route exact path='/books/new' component={NewSpellbook} />
					<Route exact path='/books/000' component={ShowSpellbook} />
				</div>
			</Router>
		)
	}
}

export default App
