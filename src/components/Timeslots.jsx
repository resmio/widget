import React, { PropTypes } from 'react'
import { style, hover, merge} from 'glamor'
import { colors } from '../styles/variables'
import { hexToRgb } from '../utils/colors'

const timeslotSS = style({
  fontSize: '1em',
  height: '2.8em',
  lineHeight: '2.8em',
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
  textAlign: 'center',
  width: '55%',
})

const discount = style({
  color: '#F8C150',
  display: 'inline-block',
  width: '10%',
})

const timeslotContainer = style({
  border: `1px solid ${colors.alto}`,
  borderTop: 'none',
  color: colors.emperor
})

const Timeslots= ({
  color,
  limit,
  onTimePeriodAdvance,
  onTimePeriodReduce,
  onTimeSelect,
  timePeriodSelected,
  timeSelected,
  timePeriods,
  timeslots,
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
          <div {...merge(timeslotContainer, timeslotHover, selectedSS, availableTimeSlotSS)}
            key={timeslot.checksum}
            onClick={available ? onTimeClick : ()=>{}}
          >
            <div {...timeslotSS}>
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

Timeslots.propTypes = {
  color: PropTypes.string,
  limit: PropTypes.number,
  onTimePeriodAdvance: PropTypes.func,
  onTimePeriodReduce: PropTypes.func,
  onTimeSelect: PropTypes.func,
  timePeriodSelected: PropTypes.number,
  timeSelected: PropTypes.string,
  timePeriods: PropTypes.array,
  timeslots: PropTypes.array
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
