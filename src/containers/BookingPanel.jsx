import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect,  } from 'react-redux';
import * as actionCreators from '../actionCreators';

// import { momentObj } from 'react-moment-proptypes'
// import { SingleDatePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'
import NumberSelector from '../components/NumberSelector'

class BookingPanel extends Component {

  render () {
    const {
      selectedGuests,
      decrementGuest,
      incrementGuest,
      maxGuests,
      minGuests,
      guestSelectorCollapsed,
      guestSelectorClicked,
      guestNumberClicked
    } = this.props
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
