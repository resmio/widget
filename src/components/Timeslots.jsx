import React from 'react'
import { style, hover, merge} from 'glamor'
import { colors } from '../styles/variables'
import { hexToRgb } from '../utils/colors'

const timeslotSS = style({
  height: '4rem',
  fontSize: '1em',
  lineHeight: '4rem',
  margin: '0 auto',
  width: '90%'
})

const time = style({
  display: 'inline-block',
  textAlign: 'center',
  width: '30%'
})

const spot = style({
  display: 'inline-block',
  width: '55%',
  textAlign: 'center'
})

const discount = style({
  display: 'inline-block',
  width: '10%',
  color: '#F8C150'
})

const timeslotContainer = style({
  borderBottom: `1px solid ${colors.alto}`,
  color: colors.emperor
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

        const onTimeClick = () => { onTimeSelect(timeslot.checksum) }
        const isTimeSelected = timeSelected === timeslot.local_time_formatted
        const available = timeslot.available >= limit

        const selectedSS = isTimeSelected
          ? {backgroundColor: color}
          : style({})

        const selectedTimeSS = isTimeSelected
          ? style({color: 'white'})
          : style({})

        const availableTimeSlotSS = available
        ? hover({color: 'white'})
        : style({})

        const availableTimeSS = available
          ? style({textDecoration: 'none'})
          : style({textDecoration: 'line-through', opacity:'0.2'})

        const timeslotHover = available
         ? hover({background: `rgba(${hexToRgb(color)}, 0.8)`, cursor: 'pointer'})
         : hover({cursor: 'default'})

        return (
          <div {...merge(timeslotContainer, timeslotHover, selectedSS)}
            key={timeslot.checksum}
            onClick={available ? onTimeClick : ()=>{}}
          >
            <div {...merge(timeslotSS, availableTimeSlotSS)}>
              <span {...merge(time, availableTimeSS, selectedTimeSS)}>{timeslot.local_time_formatted}</span>
              <span {...merge(spot, availableTimeSS, selectedTimeSS)}>{timeslot.available > 0 ? 'Available' : 'Not Available'}</span>
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

export default Timeslots

// This is the part for the filter

// import TimeslotsFilter from './TimeslotsFilter'
// <TimeslotsFilter
//   timePeriods={timePeriods}
//   timePeriodSelected={timePeriodSelected}
//   onTimePeriodAdvance={onTimePeriodAdvance}
//   onTimePeriodReduce={onTimePeriodReduce}
// />
