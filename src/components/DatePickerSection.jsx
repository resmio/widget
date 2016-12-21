import React, { PropTypes } from 'react'
import { style } from 'glamor'

import { momentObj } from 'react-moment-proptypes'
import { DayPicker } from 'react-dates'
import '../styles/_datepicker.css'

import {colors} from '../styles/variables'
import ExpandableSelector from './ExpandableSelector'

const dropdownLabel = style({
  width: '100%',
  textAlign: 'center',
  height: '3rem',
  background: colors.silver,
  lineHeight: '3rem'
})

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
    <div className='datepicker__dropdown'>
      <div {...dropdownLabel}>Select day</div>
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
