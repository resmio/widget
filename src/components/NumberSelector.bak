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
    this.state = {
      number: 1,
      max: 7,
      min: 1
    }
    this._onPlusClicked = this._onPlusClicked.bind(this)
    this._onMinusClicked = this._onMinusClicked.bind(this)
  }

  render () {
    return (
      <div {...container}>
        <div {...label}>People</div>
        <div {...input}>{this.state.number} Guests</div>
        <div {...buttonGroup}>
          <button onClick={this._onPlusClicked}>+</button>
          <button onClick={this._onMinusClicked}>-</button>
        </div>
      </div>
    )
  }

  _onPlusClicked () {
    if (this.state.number < this.state.max) {
      this.setState({number: this.state.number += 1})
    }
  }

  _onMinusClicked () {
    if (this.state.number > this.state.min) {
      this.setState({number: this.state.number -= 1})
    }
  }

}

NumberSelector.propTypes = {
}

export default NumberSelector
