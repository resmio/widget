import React, { PropTypes } from 'react'
import { style } from 'glamor'

import { momentObj } from 'react-moment-proptypes'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const label = style({
  color: '#CCC',
  flex: '1',
  paddingLeft: '1em'
})

const DatePickerSection = ({
    state,
    selectedDate,
    onDateSelected,
    onFocusChange
}) => {

  let containerHeight, contentHeight

  switch(state) {
    case 'collapsed':
      containerHeight = '15%'
      contentHeight = '100%'
      break

    case 'semicollapsed':
      containerHeight = '33.3%'
      contentHeight = '100%'
      break

    default:
      containerHeight = '70%'
      contentHeight = '4em'
  }

  const datePickerContainer = style({
    borderBottom: '1px solid #DDD',
    height: containerHeight,
  })

  const datePicker = style({
    display: 'flex',
    height: contentHeight,
    width: '100%',
    fontSize: '1.4rem',
    alignItems: 'center',
    cursor: 'pointer',
  })

  return (
    <section {...datePickerContainer}>
      <div {...datePicker}>
        <div {...label}>DATE</div>
        <SingleDatePicker
          id="date_input"
          date={selectedDate}
          focused={state === 'expanded'}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          onDateChange={onDateSelected}
        />
      </div>
    </section>
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
