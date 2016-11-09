import React, { Component, PropTypes } from 'react'
import {observer, inject} from 'mobx-react'
import { style } from 'glamor'

let colors = {
  grey: '#999'
}

let container  = style({
  background: 'white',
  color: colors.grey,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80px',
  width: '100%',
})

let label = style({
  background: 'salmon',
  paddingLeft: '30px',
  paddingRight: '15px',
  flex: '1'
})

let input = style({
  background: 'lightsalmon',
  paddingLeft: '15px',
  paddingRight: '15px',
  flex: '1',
})

let buttonGroup = style({
  background: 'lightcoral',
  paddingLeft: '15px',
  paddingRight: '15px',
  flex: '1'
})

@inject('widgetStore')
@observer class NumberSelector extends Component {

  render () {
    const { selectedGuests, addGuest } = this.props.widgetStore

    return (
      <div {...container}>
        <div {...label}>People</div>
        <div {...input}>{selectedGuests} Guests</div>
        <div {...buttonGroup}>
          <button onClick={addGuest}>+</button>
          <button onClick={addGuest}>-</button>
        </div>
      </div>
    )
  }
}

NumberSelector.wrappedComponent.propTypes = {
  widgetStore: React.PropTypes.object
}

export default NumberSelector
