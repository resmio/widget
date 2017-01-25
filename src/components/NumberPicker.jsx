import React, {PropTypes} from 'react'
import {style} from 'glamor'
import { colors } from '../styles/variables'

import ExpandableSelector from './ExpandableSelector'
import DropdownOption from './DropdownOption'

const NumberPicker = ({
    color,
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
  const numberPickerSS = style({
    color: color,
    marginTop: '1.6rem'
  })

  const dropdownLabel = style({
    width: '100%',
    textAlign: 'center',
    height: '3rem',
    background: colors.gallery,
    lineHeight: '3rem'
  })

  const numbers = [...Array(max+1).keys()].slice(min)
  const legend = (num) => num === 1 ? legendSingular : legendPlural

  const dropdownOptions = (
    numbers.map((num, i) => {
      return (
        <DropdownOption
          selected={num === number}
          color={color}
          index={i}
          key={i}
          onClickAction={onNumberSelected}
        >
          {num} {legend(num)}
        </DropdownOption>
      )
    })
  )

  const dropdown = (
    <div {...numberPickerSS}>
      <div {...dropdownLabel}>
        Select amount of people
      </div>
      {dropdownOptions}
    </div>
  )

  return (
    <ExpandableSelector
      label='PEOPLE'
      color={color}
      displayedInfo={`${number} ${legend(number)}`}
      onExpandClicked={onEditClicked}
      dropdown={dropdown}
      state={state}
    />
  )
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
  onPlusClicked: func,
  onMinusClicked: func,
}

export default NumberPicker
