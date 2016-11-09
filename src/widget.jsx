import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
// import { SingleDatePicker } from 'react-dates'
// import moment from 'moment'
// import Root from './containers/Root'
// import configureStore from './store/configureStore'
import BookingPanel from './containers/BookingPanel'
import GuestPanel from './containers/GuestPanel'

class Widget extends Component {

  render () {
    return (
      <div>
        {this.miniRouter(1)}
      </div>
    )
  }

  miniRouter (id) {
    switch (id) {
      case 1: return (<BookingPanel />)
      case 2: return (<GuestPanel />)
      default: return (<BookingPanel />)
    }
  }
}

export default Widget
