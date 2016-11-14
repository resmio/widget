import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect,  } from 'react-redux';
import * as actionCreators from '../actionCreators';

// 3rd party components
// import { momentObj } from 'react-moment-proptypes'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { style } from 'glamor'

// components
import NumberSelector from '../components/NumberSelector'

// styles
const calendarIsExpanded = style({
  height: '400px'
})

class BookingPanel extends Component {

  render () {
    const {
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
      changeSelectedDate
    } = this.props
    const expanded = calendarFocused ? calendarIsExpanded : null
    return (
      <section className='panel'>
        <NumberSelector
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
          TIMEPICKER
        </section>
      </section>
    )
  }

  // render () {
  //   const {leDate, openCalendar, onCalendarFocusChange, onDateChange} = this.props

  //       <section className="main-section">
  //         <NumberSelector />
  //         <section className='calendar'>
  //           <span>Date</span>
  //           <SingleDatePicker
  //             id="date_input"
  //             date={leDate}
  //             focused={openCalendar}
  //             onFocusChange={onCalendarFocusChange}
  //             numberOfMonths={1}
  //             onDateChange={onDateChange}
  //           />
  //         </section>
  //         <section className='time__selector'>
  //           <span>Time</span>
  //           <span>18:00</span>
  //           <span>20%</span>
  //         </section>
  //       </section>
  //       <footer>
  //         <span>Mierdilogo</span>
  //         <input type="button" value="Book Now"/>
  //       </footer>
  //     </div>
  //   )
  // }
}

// const { bool,func } = PropTypes
//
// BookingPanel.propTypes = {
//   leDate: momentObj,
//   openCalendar: bool,
//   onCalendarFocusChange: func,
//   onDateChange: func
// }


function mapStateToProps(state) {
  return state
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(BookingPanel)
