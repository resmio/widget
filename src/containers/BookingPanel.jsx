import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getSelectedAvailability, showAvailabilities } from '../selectors'

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
      availabilities,
      selectedAvailability
    } = this.props

    const { buttonColor } = this.props.custom

    const {
      selectedDate,
      selectedGuests,
      maxGuests,
      minGuests,
      timePeriodSelected,
      timePeriods
    } = this.props.booking

    const {
      availabilitiesError,
      availabilitiesFetching,
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
          color={buttonColor}
        />
        <DatePickerSection
          color={buttonColor}
          state={dateSelectorState}
          selectedDate={selectedDate}
          onFocusChange={uiDateSelectorChangeState}
          onDateSelected={selectDate}
        />
        <TimePicker
          color={buttonColor}
          error={availabilitiesError}
          timePeriods={timePeriods}
          timeSelected={selectedAvailability ? selectedAvailability.local_time_formatted : ''}
          timePeriodSelected={timePeriodSelected}
          state={timeSelectorState}
          timeslots={availabilities}
          onTimePickerClick={uiTimeSelectorChangeState}
          onTimeSelect={selectTime}
          onTimePeriodAdvance={advanceTimePeriod}
          onTimePeriodReduce={reduceTimePeriod}
          fetching={availabilitiesFetching}
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

function mapStateToProps(state) {
  return {
    ui: state.ui,
    custom: state.custom,
    booking: state.booking,
    selectedAvailability: getSelectedAvailability(state),
    availabilities: showAvailabilities(state)
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

export default connect(mapStateToProps, mapDispachToProps)(BookingPanel)
