import React from 'react'
import { style } from 'glamor'

import ExpandableSelector from './ExpandableSelector'

const timeslotSS = style({
  height: '5rem',
  fontSize: '1em',
  color: '#555',
  lineHeight: '5rem',
  margin: '0 auto',
  width: '90%',
  cursor: 'pointer'
})

const time = style({
  display: 'inline-block',
  width: '30%'
})

const spot = style({
  display: 'inline-block',
  width: '50%',
  color: '#999'
})

const discount = style({
  display: 'inline-block',
  width: '20%',
  color: '#F8C150'
})

const timeslotContainer = style({
  borderBottom: '1px solid #DDD',
})

const TimePicker = ({
  timeslots,
  onTimePickerClick,
  onTimeSelect,
  state,
  dispatch
}) => {

  const dropdown  = (
    <div>
      {timeslots.map((timeslot) => {
        
        const onTimeClick = () => {
          onTimeSelect(timeslot.checksum)
        }

        return (
          <div {...timeslotContainer}
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
  )

  return (
    <ExpandableSelector
      label='TIME'
      displayedInfo='TIMESLOT SELECCIONADO'
      onExpandClicked={onTimePickerClick}
      dropdown={dropdown}
      state={state}
    />
  )
}

export default TimePicker
