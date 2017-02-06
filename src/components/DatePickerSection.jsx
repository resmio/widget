import React, { PropTypes } from 'react'
import { style } from 'glamor'

import moment from 'moment'
import { momentObj } from 'react-moment-proptypes'
import { DayPicker } from 'react-dates'
import { colors } from '../styles/variables'
import { hexToRgb } from '../utils/colors'

import '../styles/_datepicker.css'

import ExpandableSelector from './ExpandableSelector'

const isDisabled = (day) => {
  return moment(day).diff(moment(new Date()), 'days') < 0
}

const DatePickerSection = ({
    color,
    state,
    selectedDate,
    onDateSelected,
    onFocusChange
}) => {
  const dropdownLabelSS = style({
    background: colors.gallery,
    color: color,
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    width: '100%'
  })

  const datepickerDropdown = style({
    background: `rgba(${hexToRgb(color)}, 0.3)`,
    marginTop: '1em'
  })

  const modifiers = {
    isDisabled: isDisabled,
    isSelected: (day) => moment(day).isSame(selectedDate, 'day')
  }

  const main = (
    <div {...datepickerDropdown}>
      <div {...dropdownLabelSS}>Select day</div>
      <DayPicker
        id="date_input"
        modifiers={modifiers}
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
