import React, { PropTypes } from 'react'
import { style } from 'glamor'

import { momentObj } from 'react-moment-proptypes'
import { DayPicker } from 'react-dates'
import {hexToRgb} from '../utils/colors'

import '../styles/_datepicker.css'

import ExpandableSelector from './ExpandableSelector'

const DatePickerSection = ({
    color,
    state,
    selectedDate,
    onDateSelected,
    onFocusChange
}) => {
  const dropdownLabelSS = style({
    background: `rgba(${hexToRgb(color)}, 0.3)`,
    height: '3rem',
    lineHeight: '3rem',
    textAlign: 'center',
    width: '100%'
  })

  const datepickerDropdown = style({
    background: `rgba(${hexToRgb(color)}, 0.3)`,
    marginTop: '1.3rem'
  })

  const main = (
    <div {...datepickerDropdown}>
      <div {...dropdownLabelSS}>Select day</div>
      <DayPicker
        id="date_input"
        date={selectedDate}
        focused={state === 'expanded'}
        numberOfMonths={1}
        onDayClick={onDateSelected}
      />
    </div>
  )

  return (
    <ExpandableSelector
      label={'DATE'}
      displayedInfo={selectedDate.format('dddd, MMM Do')}
      onExpandClicked={onFocusChange}
      dropdown={main}
      state={state}
    />
  )
}

const { oneOf, func } = PropTypes

DatePickerSection.propTypes = {
  state: oneOf(['collapsed', 'semicollapsed', 'expanded']).isRequired,
  selectedDate: momentObj,
  onFocusChange: func,
  onDateSelected: func
}

export default DatePickerSection
