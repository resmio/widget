import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import {observer, Provider} from 'mobx-react'
import { momentObj } from 'react-moment-proptypes'
import { SingleDatePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'
import NumberSelector from '../components/NumberSelector'
import Header from '../components/Header'
import Footer from '../components/Footer'

import store from '../store'

@observer
class BookingPanel extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='widget-container'>
        <Header
          collapsed
          facility='Meson Baturro'
          bgImage='https://zenezake.files.wordpress.com/2015/07/img_6715.jpg'
        />
          <section className="main-section">
            <NumberSelector
              max={7}
              min={1}
            />
            <section className='calendar'>
              <span>Date</span>
              <SingleDatePicker
                id="date_input"
                date={store.selectedDate}
                focused={store.calendarFocused}
                onFocusChange={store.switchFocusOnCalendar}
                numberOfMonths={1}
                onDateChange={store.changeSelectedDate}
              />
            </section>
            <section className='time__selector'>
              <span>Time</span>
              <span>18:00</span>
              <span>20%</span>
            </section>
          </section>
          <Footer />
        </div>
      </Provider>
    )
  }
}

const { bool,func } = PropTypes

BookingPanel.propTypes = {
  leDate: momentObj,
  openCalendar: bool,
  onCalendarFocusChange: func,
  onDateChange: func
}

export default BookingPanel
