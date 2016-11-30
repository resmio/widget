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
import DatePickerSection from '../components/DatePickerSection'
import TimePicker from '../components/TimePicker'

class BookingPanel extends Component {

  render () {
    // All of this is horrible and coupling this to the state
    // Find a better way to do it
    const {
      // actions
      advanceTimePeriod,
      reduceTimePeriod,
      uiGuestSelectorChangeState,
      uiDateSelectorChangeState,
      uiTimeSelectorChangeState,
      addGuest,
      removeGuest,
      selectGuest,
      selectDate,
      selectTime
    } = this.props

    const {
      availabilities,
      selectedDate,
      selectedGuests,
      maxGuests,
      minGuests,
      timeSelected,
      timePeriodSelected,
      timePeriods
    } = this.props.booking

    const {
      availabilitiesError,
      dateSelectorState,
      guestSelectorState,
      timeSelectorState
    } = this.props.ui

    const panel = style({
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
          onFocusChange={uiDateSelectorChangeState}
          onDateSelected={selectDate}
        />
        <TimePicker
          error={availabilitiesError}
          timePeriods={timePeriods}
          timeSelected={timeSelected}
          timePeriodSelected={timePeriodSelected}
          state={timeSelectorState}
          timeslots={availabilities}
          onTimePickerClick={uiTimeSelectorChangeState}
          onTimeSelect={selectTime}
          onTimePeriodAdvance={advanceTimePeriod}
          onTimePeriodReduce={reduceTimePeriod}
        />
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
