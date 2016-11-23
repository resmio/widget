import React, { PropTypes } from 'react'

import { momentObj } from 'react-moment-proptypes'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import ExpandableSelector from './ExpandableSelector'

const DatePickerSection = ({
    state,
    selectedDate,
    onDateSelected,
    onFocusChange
}) => {

  // Clicking on the arrow also fires an OnFOcuschange on the datePicker
  // So the uiDateSelectorChangeState fires twice once expanding and the
  // second one semicollapsing, check redux dev tools to see this clearly

  // Need to deal with it once doing the datepicker section
  const main = (
    <SingleDatePicker
      id="date_input"
      date={selectedDate}
      focused={true}
      onFocusChange={onFocusChange}
      numberOfMonths={1}
      onDateChange={onDateSelected}
    />
  )

  return (
    <ExpandableSelector
      label='DATE'
      displayedInfo='Odio el calendario'
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
