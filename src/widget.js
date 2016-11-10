import React, { Component } from 'react'
import {Provider} from 'mobx-react'

import Container from './containers/Container'
import WidgetStore from './widgetStore'

class Widget extends Component {
  render () {
    return (
      <Provider widgetStore={new WidgetStore()}>
        <Container />
      </Provider>
    )
  }
}


export default Widget
