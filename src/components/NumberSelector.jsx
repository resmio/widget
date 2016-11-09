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

@inject('store')
@observer class NumberSelector extends Component {

  render () {
    const { selectedGuests } = this.props.store

    return (
      <div {...container}>
        <div {...label}>People</div>
        <div {...input}>{selectedGuests} Guests</div>
        <div {...buttonGroup}>
          <button onClick={this._addGuest}>+</button>
          <button onClick={this._addGuest}>-</button>
        </div>
      </div>
    )
  }

  _addGuest = () => {
    this.props.store.addGuest()
  }
}

NumberSelector.wrappedComponent.propTypes = {
  selected: React.PropTypes.number
}

export default NumberSelector
