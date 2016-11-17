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
import Header from '../components/Header'
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
      removeGuest,
      headerImage,
      headerTextColor,
      addGuest,
      facility,
      headerColor,
      maxGuests,
      minGuests,
      guestSelectorCollapsed,
      uiOpenGuestDropdown,
      guestSelect,
      uiSwitchCalendarFocus,
      dateSelect,
      timeslotSelect
    } = this.props
    const expanded = calendarFocused ? calendarIsExpanded : null
    const headerText = style({
      color: headerTextColor
    })
    return (
      <section className='panel'>
        <Header bgImage={headerImage} bgColor={headerColor}>
          <h2 className={`mainHeading ${headerText}`}>
            Online Booking
          </h2>
          <h1 className={`secondaryHeading ${headerText}`}>
            {facility}
          </h1>
        </Header>
        <NumberPicker
          collapsed={guestSelectorCollapsed}
          legendSingular='guest'
          legendPlural='guests'
          max={maxGuests}
          min={minGuests}
          number={selectedGuests}
          onEditClicked={uiOpenGuestDropdown}
          onNumberSelected={guestSelect}
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
              onDateChange={dateSelect}
            />
        </section>
        <section>
          <TimeslotPicker
            timeslots={availabilities}
            onTimeslotClick={timeslotSelect}
          />
        </section>
      </section>
    )
  }
}

const { bool, func, number, string } = PropTypes

BookingPanel.propTypes = {
  calendarFocused: bool,
  selectedDate: momentObj,
  selectedGuests: number,
  removeGuest: func,
  facility: string,
  headerImage: string,
  headerTextColor: string,
  addGuest: func,
  openCalendar: bool,
  onCalendarFocusChange: func,
  onDateChange: func,
  headerColor: string,
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
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(BookingPanel)
