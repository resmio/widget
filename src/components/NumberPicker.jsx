import React, { PropTypes } from 'react'
import DropdownOption from './DropdownOption'

const NumberPicker = ({
    collapsed,
    legendSingular,
    legendPlural,
    max,
    min,
    number,
    onEditClicked,
    onNumberSelected,
    onPlusClicked,
    onMinusClicked,
    uiOpenGuestDropdown
}) => {
  const numbers = [...Array(max+1).keys()].slice(min)
  const dropdown = collapsed
   ? null
   : (
     <ul className='dropdown'>
        { numbers.map((num, i) => {
          const legend = num === 1 ? legendSingular : legendPlural
          return (
            <DropdownOption
              key={i}
              index={i}
              onClickAction={onNumberSelected}
            >
              {num} {legend}
            </DropdownOption>)
        })}
     </ul>
   )
   const legend = number === 1 ? legendSingular : legendPlural
  return (
    <div className='NumberPicker'>
      <div className='label'>People</div>
      <div className='input' onClick={onEditClicked}>{number} {legend}</div>
      <div className='button-group'>
        <button onClick={onPlusClicked}>+</button>
        <button onClick={onMinusClicked}>-</button>
      </div>
      {dropdown}
    </div>
  )
}

const { bool, func, number, string } = PropTypes

NumberPicker.propTypes = {
  collapsed: bool,
  legendSingular: string,
  legendPlural: string.isRequired,
  max: number.isRequired,
  min: number.isRequired,
  number: number.isRequired,
  onEditClicked: func.isRequired,
  onNumberSelected: func.isRequired,
  onPlusClicked: func.isRequired,
  onMinusClicked: func.isRequired,
}

export default NumberPicker
