// react
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// redux
import { Provider } from 'react-redux'

// import { createStore } from 'redux'
// import { SingleDatePicker } from 'react-dates'
// import moment from 'moment'
// import configureStore from './store/configureStore'
import BookingPanel from './BookingPanel'
import GuestPanel from './GuestPanel'

class Widget extends Component {

  render () {
    return (
      <Provider store={this.props.store}>
        {this.miniRouter(this.props.currentPanel)}
      </Provider>
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
