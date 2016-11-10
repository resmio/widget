import React, { Component } from 'react'
import {Provider} from 'mobx-react'
import moment from 'moment'
import {observable, action, useStrict} from 'mobx'
useStrict(true)

import Container from './containers/Container'

const store = observable({
  calendarFocused: false,
  currentPanel: 1,
  palette: {
    main: 'red',
    secondary: 'yellow'
  },
  selectedDate: moment(),
  selectedGuests: 2,
  addGuest: action(function () {
    store.selectedGuests = store.selectedGuests + 1
  })
})

class Widget extends Component {
  render () {
    return (
      <Provider widgetStore={store}>
        <Container />
      </Provider>
    )
  }
}


export default Widget
