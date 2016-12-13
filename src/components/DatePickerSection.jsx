import React, { PropTypes } from 'react'
import { withTranslate } from 'react-redux-multilingual'

import { momentObj } from 'react-moment-proptypes'
import { DayPicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import ExpandableSelector from './ExpandableSelector'

const DatePickerSection = ({
    state,
    selectedDate,
    onDateSelected,
    onFocusChange,
    translate
}) => {

  // Clicking on the arrow also fires an OnFOcuschange on the datePicker
  // So the uiDateSelectorChangeState fires twice once expanding and the
  // second one semicollapsing, check redux dev tools to see this clearly

  // Need to deal with it once doing the datepicker section
  const main = (
    <DayPicker
      id="date_input"
      date={selectedDate}
      focused={state === 'expanded'}
      numberOfMonths={1}
      onDayClick={onDateSelected}
    />
  )

  return (
    <ExpandableSelector
      label={translate('DATE')}
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

export default withTranslate(DatePickerSection)
