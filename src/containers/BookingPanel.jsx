import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

// 3rd party components
import { style } from 'glamor'
import { momentObj } from 'react-moment-proptypes'

// components
import NumberPicker from '../components/NumberPicker'
import TimeslotPicker from '../components/TimeslotPicker'
import DatePickerSection from '../components/DatePickerSection'

class BookingPanel extends Component {

  render () {
    // All of this is horrible and coupling this to the state
    // Find a better way to do it
    const {
      // actions
      uiGuestSelectorChangeState,
      uiDatepickerChangeState,
      uiSwitchTimeslot,
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
      dateSelectorState,
      guestSelectorState,
      timeslotSelectorCollapsed
    } = this.props.ui

    const panel = style({
      background: 'lemonchiffon',
      position: 'absolute',
      top: '6em',
      bottom: '6em',
      left: '0',
      right: '0'
    })

    return (
      <section {...panel}>
        <NumberPicker
          state={guestSelectorState}
          legendSingular='guest'
          legendPlural='guests'
          max={maxGuests}
          min={minGuests}
          number={selectedGuests}
          onEditClicked={uiGuestSelectorChangeState}
          onNumberSelected={selectGuest}
          onPlusClicked={addGuest}
          onMinusClicked={removeGuest}
        />
        <DatePickerSection
          state={dateSelectorState}
          selectedDate={selectedDate}
          onFocusChange={uiDatepickerChangeState}
          onDateSelected={selectDate}
        />
        <section>
          <TimeslotPicker
            collapsed={timeslotSelectorCollapsed}
            timeslots={availabilities}
            onTimeslotClick={uiSwitchTimeslot}
            onTimeslotSelect={selectTimeslot}
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
  uiGuestSelectorChangeState: func,
  guestSelect: func,
  uiDatepickerChangeState: func,
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
