import React, { Component, PropTypes } from 'react'
import {observer, inject} from 'mobx-react'
import Devtools from 'mobx-react-devtools'

import BookingPanel from './BookingPanel'

@inject('widgetStore')
@observer class Container extends Component {
  render () {
    const {panel} = this.props.widgetStore
    switch (panel) {
      case 1: return this._renderBookingPanel()
      case 2: return this._renderGuestPanel()
      default: return this._renderBookingPanel()
    }
  }
  _renderBookingPanel () {
    return (
      <div>
        <Devtools />
        <BookingPanel />
      </div>
    )
  }
  _renderGuestPanel () {
    // Placeholder
    return (
      <h1>Guest Panel</h1>
    )
  }
}

export default Container
