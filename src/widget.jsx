import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

class Widget extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Widget Meson Baturro</h1>
        <h2>Hola amigos</h2>
      </div>
    )
  }
}

export default Widget
