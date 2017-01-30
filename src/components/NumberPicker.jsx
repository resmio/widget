import React, {PropTypes} from 'react'
import {style} from 'glamor'
import { colors } from '../styles/variables'

import ExpandableSelector from './ExpandableSelector'
import DropdownOption from './DropdownOption'

const dropdownLabel = style({
  background: colors.gallery,
  lineHeight: '3rem',
  height: '3rem',
  textAlign: 'center',
  width: '100%',
})

const NumberPicker = ({
    color,
    legendPlural,
    legendSingular,
    max,
    min,
    number,
    onEditClicked,
    onMinusClicked,
    onNumberSelected,
    onPlusClicked,
    state
}) => {
  const numberPickerSS = style({
    color: color,
    marginTop: '1.6rem'
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
          {num}
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
      color={color}
      displayedInfo={`${number} ${legend(number)}`}
      dropdown={dropdown}
      label='PEOPLE'
      onExpandClicked={onEditClicked}
      state={state}
    />
  )
}

const { oneOf, func, number, string } = PropTypes

NumberPicker.propTypes = {
  color: string,
  legendPlural: string.isRequired,
  legendSingular: string.isRequired,
  max: number.isRequired,
  min: number.isRequired,
  number: number.isRequired,
  onEditClicked: func.isRequired,
  onMinusClicked: func,
  onNumberSelected: func.isRequired,
  onPlusClicked: func,
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
}

export default NumberPicker
