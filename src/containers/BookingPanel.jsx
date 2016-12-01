import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'

// 3rd party components
import { momentObj } from 'react-moment-proptypes'

// components
import Panel from '../components/Panel'
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
      selectTime,
      selectedAvailability
    } = this.props

    const {
      availabilities,
      selectedDate,
      selectedGuests,
      maxGuests,
      minGuests,
      timePeriodSelected,
      timePeriods
    } = this.props.booking

    const {
      availabilitiesError,
      dateSelectorState,
      guestSelectorState,
      timeSelectorState
    } = this.props.ui

    return (
      <Panel>
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
          timeSelected={selectedAvailability.local_time_formatted}
          timePeriodSelected={timePeriodSelected}
          state={timeSelectorState}
          timeslots={availabilities}
          onTimePickerClick={uiTimeSelectorChangeState}
          onTimeSelect={selectTime}
          onTimePeriodAdvance={advanceTimePeriod}
          onTimePeriodReduce={reduceTimePeriod}
        />
      </Panel>
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

const getSelectedAvailability = (availabilities, checksum) => {
  // we are returning an empty object at initialization
  // this is not a goood solution but it works for now
  // Probably we need to init with some availability in there before
  // rendering the time picker
  return availabilities.filter(
    availability => availability.checksum === checksum
  )[0] || {}
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    custom: state.custom,
    booking: state.booking,
    // Maybe move this selector to the booking reducer
    // https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44#.da5nnmgvg
    // See point 9
    selectedAvailability: getSelectedAvailability(
      state.booking.availabilities, state.booking.selectedTime
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(BookingPanel)
