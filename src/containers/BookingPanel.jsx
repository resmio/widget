import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

// 3rd party components
import { momentObj } from 'react-moment-proptypes'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { style } from 'glamor'

// components
import NumberPicker from '../components/NumberPicker'
import TimeslotPicker from '../components/TimeslotPicker'

// styles
const calendarIsExpanded = style({
  height: '400px'
})

class BookingPanel extends Component {

  render () {
    // All of this is horrible and coupling this to the state
    // Find a better way to do it
    const {
      // actions
      uiOpenGuestDropdown,
      uiSwitchCalendarFocus,
      addGuest,
      removeGuest,
      selectGuest,
      selectDate,
      selectTimeslot
    } = this.props

    const {
      availabilities,
      selectedDate,
      selectedGuests,
      maxGuests,
      minGuests
    } = this.props.booking

    const {
      defaultHeight,
    } = this.props.custom

    const {
      calendarFocused,
      guestSelectorCollapsed
    } = this.props.ui

    const expanded = calendarFocused ? calendarIsExpanded : null

    const panel = style({
      height: defaultHeight,
      overflow: 'scroll'
    })

    return (
      <section {...panel}>
        <NumberPicker
          collapsed={guestSelectorCollapsed}
          legendSingular='guest'
          legendPlural='guests'
          max={maxGuests}
          min={minGuests}
          number={selectedGuests}
          onEditClicked={uiOpenGuestDropdown}
          onNumberSelected={selectGuest}
          onPlusClicked={addGuest}
          onMinusClicked={removeGuest}
        />
        <section className={`calendar ${expanded}`}>
            <span>Date</span>
            <SingleDatePicker
              id="date_input"
              date={selectedDate}
              focused={calendarFocused}
              onFocusChange={uiSwitchCalendarFocus}
              numberOfMonths={1}
              onDateChange={selectDate}
            />
        </section>
        <section>
          <TimeslotPicker
            timeslots={availabilities}
            onTimeslotClick={selectTimeslot}
            collapsed={true}
          />
        </section>
      </section>
    )
  }
}

const { bool, func, number } = PropTypes

BookingPanel.propTypes = {
  calendarFocused: bool,
  selectedDate: momentObj,
  selectedGuests: number,
  removeGuest: func,
  addGuest: func,
  openCalendar: bool,
  onCalendarFocusChange: func,
  onDateChange: func,
  maxGuests: number,
  minGuests: number,
  guestSelectorCollapsed: bool,
  uiOpenGuestDropdown: func,
  guestSelect: func,
  uiSwitchCalendarFocus: func,
  dateSelect: func
}

function mapStateToProps(state) {
  return state
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(BookingPanel)
