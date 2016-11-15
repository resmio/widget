import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect,  } from 'react-redux';
import * as actionCreators from '../actionCreators';

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
    const {
      availabilities,
      calendarFocused,
      selectedDate,
      selectedGuests,
      decrementGuest,
      incrementGuest,
      maxGuests,
      minGuests,
      guestSelectorCollapsed,
      guestSelectorClicked,
      guestNumberClicked,
      switchCalendarFocus,
      changeSelectedDate,
      selectTimeslot
    } = this.props
    const expanded = calendarFocused ? calendarIsExpanded : null
    return (
      <section className='panel'>
        <NumberPicker
          collapsed={guestSelectorCollapsed}
          legendSingular='guest'
          legendPlural='guests'
          max={maxGuests}
          min={minGuests}
          number={selectedGuests}
          onEditClicked={guestSelectorClicked}
          onNumberSelected={guestNumberClicked}
          onPlusClicked={incrementGuest}
          onMinusClicked={decrementGuest}
        />
        <section className={`calendar ${expanded}`}>
            <span>Date</span>
            <SingleDatePicker
              id="date_input"
              date={selectedDate}
              focused={calendarFocused}
              onFocusChange={switchCalendarFocus}
              numberOfMonths={1}
              onDateChange={changeSelectedDate}
            />
        </section>
        <section>
          <TimeslotPicker
            timeslots={availabilities}
            onTimeslotClick={selectTimeslot}
          />
        </section>
      </section>
    )
  }
}

const { bool,func, number } = PropTypes

BookingPanel.propTypes = {
  calendarFocused: bool,
  selectedDate: momentObj,
  selectedGuests: number,
  decrementGuest: func,
  incrementGuest: func,
  openCalendar: bool,
  onCalendarFocusChange: func,
  onDateChange: func,
  maxGuests: number,
  minGuests: number,
  guestSelectorCollapsed: bool,
  guestSelectorClicked: func,
  guestNumberClicked: func,
  switchCalendarFocus: func,
  changeSelectedDate: func
}

function mapStateToProps(state) {
  return state
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(BookingPanel)
