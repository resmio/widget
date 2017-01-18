import React from 'react'
import { style, hover, merge } from 'glamor'

const timeslotSS = style({
  height: '4rem',
  fontSize: '1em',
  color: '#555',
  lineHeight: '4rem',
  margin: '0 auto',
  width: '90%',
  cursor: 'pointer',
})

const timeslotHover = hover({
  background: '#555',
  color: 'white'
})

const time = style({
  display: 'inline-block',
  textAlign: 'center',
  width: '30%'
})

const spot = style({
  display: 'inline-block',
  width: '55%',
  textAlign: 'center',
  color: '#999'
})

const discount = style({
  display: 'inline-block',
  width: '10%',
  color: '#F8C150'
})

const timeslotContainer = style({
  borderBottom: '1px solid #DDD'
})

const Timeslots= ({
  timeslots,
  timeSelected,
  onTimeSelect,
  timePeriods,
  timePeriodSelected,
  onTimePeriodAdvance,
  onTimePeriodReduce
}) => (
  <div>
    {timeslots.map((timeslot) => {

      const onTimeClick = () => {
        onTimeSelect(timeslot.checksum)
      }

      return (
        <div {...merge(timeslotContainer, timeslotHover)}
          key={timeslot.checksum}
          onClick={onTimeClick}
        >
          <div {...timeslotSS}>
            <span {...time}>{timeslot.local_time_formatted}</span>
            <span {...spot}>{timeslot.available} available</span>
            <span {...discount}>
              {timeslot.price_change !== 0 ? `${timeslot.price_change}%` : ''}
            </span>
          </div>
        </div>
      )
    })}
  </div>
)

export default Timeslots

// This is the part for the filter

// import TimeslotsFilter from './TimeslotsFilter'
// <TimeslotsFilter
//   timePeriods={timePeriods}
//   timePeriodSelected={timePeriodSelected}
//   onTimePeriodAdvance={onTimePeriodAdvance}
//   onTimePeriodReduce={onTimePeriodReduce}
// />
