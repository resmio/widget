import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
// import { momentObj } from 'react-moment-proptypes'
// import { SingleDatePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'
// import NumberSelector from '../components/NumberSelector'
// import Header from '../components/Header'

class BookingPanel extends Component {

  render () {
    return (
      <h1>Booking Panel</h1>
    )
  }

  // render () {
  //   const {leDate, openCalendar, onCalendarFocusChange, onDateChange} = this.props
  //   return (
  //     <div className='widget-container'>
  //       <Header
  //         collapsed
  //         facility='Meson Baturro'
  //         bgImage="https://zenezake.files.wordpress.com/2015/07/img_6715.jpg"
  //       />
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

export default BookingPanel
