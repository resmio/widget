import React from 'react'
import { style, hover, merge } from 'glamor'

import TimeslotsFilter from './TimeslotsFilter'

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
  width: '30%'
})

const spot = style({
  display: 'inline-block',
  width: '45%',
  marginLeft: '5%',
  color: '#999'
})

const discount = style({
  display: 'inline-block',
  width: '20%',
  color: '#F8C150'
})

const timeslotContainer = style({
  borderBottom: '1px solid #DDD'
})

const timeslotsContainer = style({
  paddingTop: '4rem'
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
    <TimeslotsFilter
      timePeriods={timePeriods}
      timePeriodSelected={timePeriodSelected}
      onTimePeriodAdvance={onTimePeriodAdvance}
      onTimePeriodReduce={onTimePeriodReduce}
    />
    <div {...timeslotsContainer}>
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
              <span {...discount}>{timeslot.price_change}%</span>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

export default Timeslots