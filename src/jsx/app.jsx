// import react modules
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import components
import Splash from './splash.jsx'
import Spellbooks from './spellbooks.jsx'
import NewSpellbook from './spellbooks-new.jsx'
import ShowSpellbook from './spellbooks-show.jsx'
import EditSpellbook from './spellbooks-edit.jsx'

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
					<Route exact path='/books/000/edit' component={EditSpellbook} />
				</div>
			</Router>
		)
	}
}

export default App
