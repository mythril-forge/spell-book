// import react modules
import React, {Component} from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

// import components
import Navbar from '../navbar.jsx'

// define component item
class EditSpellbook extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: ''
		}
	}

	handleSubmit = () => {
		this.setState({redirect: '/books/000'})
	}

	render () {
		const { redirect } = this.state
		if (redirect !== '') {
			return <Redirect to={redirect} />
		}

		return (
			<div className='base'>
				<Navbar />
				<h1>Edit Spellbook</h1>
				<form>
					<div>
						<label htmlFor='name'>Character Name</label><br />
						<input id='name'/>
					</div>
					<div>
						<label htmlFor='class'>Class</label><br />
						<input id='class'/>
					</div>
					<div>
						<label htmlFor='subclass'>Subclass</label><br />
						<input />
					</div>
					<div>
						<label htmlFor='race'>Race</label><br />
						<input />
					</div>
					<div>
						<label htmlFor='subrace'>Subrace</label><br />
						<input />
					</div>
					<div>
						<label htmlFor='level'>Level</label><br />
						<input type='number' min='0' max='20'/>
					</div>
					<div>
						<label htmlFor='color'>Book Colour</label><br />
						<input type='color'/>
					</div>
					<div className='thumb-button'>
						<button type='button' onClick={this.handleSubmit}>Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default EditSpellbook
