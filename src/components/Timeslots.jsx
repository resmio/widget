import React from 'react'
import { style, hover, merge } from 'glamor'
import {hexToRgb} from '../utils/colors'

const timeslotSS = style({
  height: '4rem',
  fontSize: '1em',
  lineHeight: '4rem',
  margin: '0 auto',
  width: '90%',
  cursor: 'pointer',
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
  color,
  limit,
  timeslots,
  timeSelected,
  onTimeSelect,
  timePeriods,
  timePeriodSelected,
  onTimePeriodAdvance,
  onTimePeriodReduce
}) => {

  return (
    <div>
      {timeslots.map((timeslot) => {

        const onTimeClick = () => {
          onTimeSelect(timeslot.checksum)
        }

        const isTimeSelected = timeSelected === timeslot.local_time_formatted
        const available = timeslot.available > limit

        const selectedSS = isTimeSelected
          ? {backgroundColor: `rgba(${hexToRgb(color)}, 0.8)`}
          : style({})

        const selectedTimeSS = isTimeSelected
          ? style({color: 'white'})
          : style({})

        const availableTimeSS = available
          ? style({textDecoration: 'none'})
          : style({textDecoration: 'line-through', opacity:'0.2'})

        // This does not work yet
        const timeslotHover = available
         ? hover({background: color, color: 'white'})
         : hover({cursor: 'not-allowed'})

        return (
          <div {...merge(timeslotContainer, timeslotHover, selectedSS)}
            key={timeslot.checksum}
            onClick={available ? onTimeClick : ()=>{}}
          >
            <div {...merge(timeslotSS)}>
              <span {...merge(time, availableTimeSS, selectedTimeSS)}>{timeslot.local_time_formatted}</span>
              <span {...merge(spot, availableTimeSS)}>{timeslot.available} available</span>
              <span {...discount}>
                {timeslot.price_change !== 0 ? `${timeslot.price_change}%` : ''}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Tmeslot not available
// Disable hover
// Disable onCLick
// Change opacity
// Linetthrough time
// Show not available

export default Timeslots

// This is the part for the filter

// import TimeslotsFilter from './TimeslotsFilter'
// <TimeslotsFilter
//   timePeriods={timePeriods}
//   timePeriodSelected={timePeriodSelected}
//   onTimePeriodAdvance={onTimePeriodAdvance}
//   onTimePeriodReduce={onTimePeriodReduce}
// />
