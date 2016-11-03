import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Root from './containers/Root'
import NumberSelector from './components/NumberSelector'
import configureStore from './store/configureStore'

class Widget extends Component {
  render () {
    return (
      <div className='widget-container'>
        <header className='widget__header'>
          <h1>Online Booking</h1>
          <h2>Meson Baturro</h2>
        </header>
        <section className="main-section">
          <NumberSelector />
          <section className='calendar'>
            <span>Date</span>
            <span>Today, 30 Oct 2016</span>
          </section>
          <section className='time__selector'>
            <span>Time</span>
            <span>18:00</span>
            <span>20%</span>
          </section>
        </section>
        <footer>
          <span>Mierdilogo</span>
          <input type="button" value="Book Now"/>
        </footer>
      </div>
    )
  }
}

export default Widget
