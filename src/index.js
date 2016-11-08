require('./styles.scss')
import React from 'react'
import { render } from 'react-dom'

// This is here for testing purposes, we should call the <Widget> instead
// for the final build
import HomePage from './home-page'

render(<HomePage />, document.getElementById('root'))
