import React, { Component, PropTypes } from 'react'

const NumberSelector = ({number, onPlusClicked, onMinusClicked}) => (
  <div className='NumberSelector'>
    <div className='label'>People</div>
    <div className='input'>{number} Guests</div>
    <div className='button-group'>
      <button onClick={onPlusClicked}>+</button>
      <button onClick={onMinusClicked}>-</button>
    </div>
  </div>
)

NumberSelector.propTypes = {
  number: PropTypes.number,
  onMinusClicked: PropTypes.func,
  onPlusClicked: PropTypes.func
}

export default NumberSelector
