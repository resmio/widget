import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import { withTranslate } from 'react-redux-multilingual'

import * as bookingActions from '../actions/bookingActions'
import * as uiActions from '../actions/uiActions'
import { getSelectedAvailability, showAvailabilities } from '../selectors'

// components
import Panel from '../components/Panel'
import NumberPicker from '../components/NumberPicker'
import DatePickerSection from '../components/DatePickerSection'
import TimePicker from '../components/TimePicker'

class BookingPanel extends Component {

  render () {
    const {
      advanceTimePeriod,
      availabilities,
      availabilitiesError,
      availabilitiesFetching,
      buttonColor,
      dateSelectorState,
      guestSelectorState,
      headerColor,
      maxGuests,
      minGuests,
      reduceTimePeriod,
      selectedDate,
      selectedGuests,
      timePeriods,
      timePeriodSelected,
      timeSelectorState,
    } = this.props.state

    const {
      selectDate,
      selectedAvailability,
      selectGuest,
      selectTime,
      translate,
      uiGuestSelectorChangeState,
      uiDateSelectorChangeState,
      uiTimeSelectorChangeState,
    } = this.props

    return (
      <Panel>
        <NumberPicker
          state={guestSelectorState}
          legendSingular={translate('guest')}
          legendPlural={translate('guests')}
          max={maxGuests}
          min={minGuests}
          number={selectedGuests}
          onEditClicked={uiGuestSelectorChangeState}
          onNumberSelected={selectGuest}
          color={headerColor}
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

const { func, object } = PropTypes

BookingPanel.propTypes = {
  selectGuest: func,
  selectDate: func,
  selectedAvailability: object,
  selectTime: func,
  state: object,
  uiGuestSelectorChangeState: func,
  uiDateSelectorChangeState: func,
  uiTimeSelectorChangeState: func,
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

export default connect(mapStateToProps, mapDispachToProps)(withTranslate(BookingPanel))
