import React, { PropTypes } from 'react'
import { style, merge, select as $ } from 'glamor'

import ExpandableSelector from './ExpandableSelector'

import DropdownOption from './DropdownOption'

const buttonGroup = style({
  flex: '1',
  paddingRight: '1em',
  textAlign: 'right'
})

const button = merge(
  {
    background: '#FFF',
    border: '1px solid #DDD',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '2rem',
    height: '3rem',
    width: '3rem'
  },
  $(':hover', {
    background: '#555',
    color: '#FFF'
  })
)

const NumberPicker = ({
    state,
    legendSingular,
    legendPlural,
    max,
    min,
    number,
    onEditClicked,
    onNumberSelected,
    onPlusClicked,
    onMinusClicked,
    uiGuestSelectorChangeState
}) => {

  const numbers = [...Array(max+1).keys()].slice(min)
  const customButton = (
    <div {...buttonGroup}>
      <button {...button} onClick={onMinusClicked}>-</button>
      <button {...button} onClick={onPlusClicked}>+</button>
    </div>
  )

  const dropdown = (
   <div>
      {
        numbers.map((num, i) => {
          const legend = num === 1 ? legendSingular : legendPlural
          return (
            <DropdownOption key={i} index={i} onClickAction={onNumberSelected}>
              {num} {legend}
            </DropdownOption>
          )
        })
      }
   </div>
  )

  const legend = number === 1 ? legendSingular : legendPlural

  return (
    <ExpandableSelector
      label='PEOPLE'
      displayedInfo={`${number} ${legend}`}
      onExpandClicked={onEditClicked}
      dropdown={dropdown}
      customButton={customButton}
      state={state}
    />
  )
  //   <div {...numberPickerContainer}>
  //     <div {...numberPicker}>
  //       <Label>PEOPLE</Label>
  //       <Value onClickAction={onEditClicked}>{number} {legend}</Value>
  //       {action}
  //     </div>
  //     {dropdown}
  //   </div>
  // )
}

const { oneOf, func, number, string } = PropTypes

NumberPicker.propTypes = {
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
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
