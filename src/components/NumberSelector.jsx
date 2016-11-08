import React, { Component, PropTypes } from 'react'
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

class NumberSelector extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div {...container}>
        <div {...label}>People</div>
        <div {...input}>{this.props.selected} Guests</div>
        <div {...buttonGroup}>
          <button onClick={this._onPlusClicked}>+</button>
          <button onClick={this._onMinusClicked}>-</button>
        </div>
      </div>
    )
  }
}

NumberSelector.propTypes = {
  selected: React.PropTypes.number
}

export default NumberSelector
