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
    const {
      advanceTimePeriod,
      availabilitiesError,
      availabilitiesFetching,
      dateSelectorState,
      guestSelectorState,
      headerColor,
      timeSelectorState,
      buttonColor,
      reduceTimePeriod,
      availabilities,
      selectedDate,
      selectedGuests,
      maxGuests,
      minGuests,
      timePeriodSelected,
      timePeriods,
    } = this.props.state

    const {
      uiGuestSelectorChangeState,
      uiDateSelectorChangeState,
      uiTimeSelectorChangeState,
      selectGuest,
      selectDate,
      selectTime,
      selectedAvailability
    } = this.props

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
          color={headerColor}
          error={availabilitiesError}
          limit={selectedGuests}
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
    state,
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
