import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import Root from './containers/Root'
import NumberSelector from './components/NumberSelector'
import configureStore from './store/configureStore'

class Widget extends Component {

  constructor (props) {
    super(props)
    this.state = {
      openCalendar: false,
      leDate: moment(new Date())
    }
    this._onCalendarFocusChange = this._onCalendarFocusChange.bind(this)
    this._onDateChange = this._onDateChange.bind(this)
  }

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
            <SingleDatePicker
              id="date_input"
              date={this.state.leDate}
              focused={this.state.openCalendar}
              onFocusChange={this._onCalendarFocusChange}
              numberOfMonths={1}
              onDateChange={this._onDateChange}
            />
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

  _onCalendarFocusChange () {
    this.setState({
      openCalendar: !this.state.openCalendar
    })
  }

  _onDateChange (date) {
    this.setState({
      leDate: date
    })
  }
}

export default Widget
