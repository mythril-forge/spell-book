// import react modules
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDAndD } from '@fortawesome/free-brands-svg-icons'

// import components
import Splash from './splash.jsx'
import About from './about.jsx'
// spellbooks
import Spellbooks from './spellbooks/spellbooks.jsx'
import NewSpellbook from './spellbooks/spellbooks-new.jsx'
import ShowSpellbook from './spellbooks/spellbooks-show.jsx'
import EditSpellbook from './spellbooks/spellbooks-edit.jsx'
// spells
import Spells from './spells/spells.jsx'
import ShowSpell from './spells/spells-show.jsx'

// import other local assets
import '../css/app.css'
import '../css/app-root.css'

// init font-awesome assets
library.add(faFacebookF)
library.add(faTwitter)
library.add(faGithub)
library.add(faDAndD)

// define component item
class App extends Component {
	render() {
		return (
			<Router>
				<div className='base'>
					<Route exact path='/' component={Splash} />
					<Route exact path='/about' component={About} />
					<Route exact path='/books' component={Spellbooks} />
					<Route exact path='/books/new' component={NewSpellbook} />
					<Route exact path='/books/000' component={ShowSpellbook} />
					<Route exact path='/books/000/edit' component={EditSpellbook} />
					<Route exact path='/spells' component={Spells} />
					<Route exact path='/spells/000' component={ShowSpell} />
				</div>
			</Router>
		)
	}
}

export default App
