import React from 'react'
import ReactDOM from 'react-dom'
import App from './jsx/app.jsx'
import * as serviceWorker from './serviceWorker.js'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister() // ← ← ← this will be set up in a future sprint
// Progressive Web Apps will outweigh the pitfalls experienced in development.
// Some iOS phones may not be able to support it, but Apple needs to step up!
