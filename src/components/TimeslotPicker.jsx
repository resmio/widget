import React from 'react'
import '../styles/TimeslotPicker.css'

const TimeslotPicker = ({timeslots, onTimeslotClick}) => (
  <div>
    {timeslots.map((timeslot) => {
      return (
        <div
          key={timeslot.checksum}
          id={timeslot.checksum}
          className='timeslot'
          onClick={onTimeslotClick}
        >
        <span className='timeslot__discount'>{timeslot.price_change}%</span>
          <span className='timeslot__time'>{timeslot.local_time_formatted}</span>
          <span className='timeslot__spots'>{timeslot.available} available</span>
        </div>
      )
    })}
  </div>
)

export default TimeslotPicker
