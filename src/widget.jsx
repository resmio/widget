import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import BookingPanel from './containers/BookingPanel'

class Widget extends Component {

  constructor (props) {
    super(props)
    this.state = {
      panel: 1,
      openCalendar: false,
      leDate: moment(new Date())
    }
    this._onCalendarFocusChange = this._onCalendarFocusChange.bind(this)
    this._onDateChange = this._onDateChange.bind(this)
  }

  render () {
    switch (this.state.panel) {
      case 1: return this._renderBookingPanel()
      case 2: return this._renderGuestPanel()
      default: return this._renderBookingPanel()
    }
  }

  _renderBookingPanel () {
    return (
      <BookingPanel
        leDate={this.state.leDate}
        openCalendar={this.state.openCalendar}
        onCalendarFocusChange={this._onCalendarFocusChange}
        onDateChange={this._onDateChange}
      />
    )
  }

  _renderGuestPanel () {
    // Placeholder
    return (
      <h1>Guest Panel</h1>
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
