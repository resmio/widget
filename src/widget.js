import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { render } from 'react-dom'
import Devtools from 'mobx-react-devtools'

import store from './store'

import { SingleDatePicker } from 'react-dates'
import BookingPanel from './containers/BookingPanel'

@observer class Widget extends Component {

  render () {
    switch (store.panel) {
      case 1: return this._renderBookingPanel()
      case 2: return this._renderGuestPanel()
      default: return this._renderBookingPanel()
    }

    // return <Provider store={widgetStore}>
  }

  _renderBookingPanel () {
    return (
      <div>
        <Devtools />
        <BookingPanel
          leDate={store.date}
          openCalendar={store.calendarFocused}
          guests={store.guests}
          onCalendarFocusChange={this._onCalendarFocusChange}
          onDateChange={this._onDateChange}
        />
      </div>
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
