// import react modules
import React from 'react'

// define component item
const NewSpellbook = () => {
	return (
		<div>
			<h1>New Spellbook</h1>
			<div>
				<label>Character Name</label><br />
				<input />
			</div>
			<div>
				<label>Class</label><br />
				<input />
			</div>
			<div>
				<label>Subclass</label><br />
				<input />
			</div>
			<div>
				<label>Race</label><br />
				<input />
			</div>
			<div>
				<label>Subrace</label><br />
				<input />
			</div>
			<div>
				<label>Level</label><br />
				<input type='number' min='0' max='20'/>
			</div>
			<div>
				<label>Colour</label><br />
				<input type='color'/>
			</div>
			<button type='submit'>Submit</button>
		</div>
	)
}

export default NewSpellbook
