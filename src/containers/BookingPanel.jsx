import React, {Component, PropTypes} from 'react'
import {observer, inject} from 'mobx-react'
import {momentObj} from 'react-moment-proptypes'
import {SingleDatePicker} from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'
import NumberSelector from '../components/NumberSelector'
import Header from '../components/Header'
import Footer from '../components/Footer'

@inject('widgetStore')
@observer class BookingPanel extends Component {
  render () {
    const {selectedDate, calendarFocused, switchFocusOnCalendar, changeSelectedDate} = this.props.widgetStore

    return (
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
              date={selectedDate}
              focused={calendarFocused}
              onFocusChange={switchFocusOnCalendar}
              numberOfMonths={1}
              onDateChange={changeSelectedDate}
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
    )
  }
}

BookingPanel.wrappedComponent.propTypes = {
  widgetStore: PropTypes.object.isRequired
}

export default BookingPanel
