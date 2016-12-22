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
    width: '100%',
    textAlign: 'center',
    height: '3rem',
    background: `rgba(${hexToRgb(color)}, 0.3)`,
    lineHeight: '3rem'
  })

  const daypickerContainer = style({
    background: `rgba(${hexToRgb(color)}, 0.3)`,
  })
  // Clicking on the arrow also fires an OnFOcuschange on the datePicker
  // So the uiDateSelectorChangeState fires twice once expanding and the
  // second one semicollapsing, check redux dev tools to see this clearly

  // Need to deal with it once doing the datepicker section
  const main = (
    <div className='datepicker__dropdown'>
      <div {...dropdownLabelSS}>Select day</div>
      <div {...daypickerContainer}>
        <DayPicker
          id="date_input"
          date={selectedDate}
          focused={state === 'expanded'}
          numberOfMonths={1}
          onDayClick={onDateSelected}
        />
      </div>
    </div>
  )

  return (
    <ExpandableSelector
      label='DATE'
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
