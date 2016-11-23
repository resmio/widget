import React from 'react'
import { style, merge, select as $ } from 'glamor'
// import '../styles/TimeslotPicker.css'

import IconArrow from './IconArrow'

const label = style({
  color: '#CCC',
  flex: '1',
  paddingLeft: '1em'
})

const input = style({
  color: '#555',
  flex: '1',
  role: 'input',
  tabindex: '0',
  textAlign: 'center',
  cursor: 'pointer'
})

const arrow = merge(
  {
    color: '#CCC',
    cursor: 'pointer',
    flex: '1',
    paddingRight: '1em',
    textAlign: 'right'
  },
  $(':hover', {
    color: '#555'
  })
)

const timeslotSS = style({
  height: '5rem',
  fontSize: '1.6em',
  color: '#555',
  lineHeight: '5rem',
  margin: '0 auto',
  width: '80%',
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

const TimePicker = ({
  timeslots,
  onTimePickerClick,
  onTimeslotSelect,
  state
}) => {
  let containerHeight, contentHeight

  switch(state) {
    case 'collapsed':
      containerHeight = '15%'
      contentHeight = '100%'
      break

    case 'semicollapsed':
      containerHeight = '33.3%'
      contentHeight = '100%'
      break

    default:
      containerHeight = '70%'
      contentHeight = '4em'
  }

  const timePickerContainer = style({
    borderTop: '1px solid #DDD',
    height: containerHeight
  })

  const timePicker = style({
    display: 'flex',
    height: contentHeight,
    width: '100%',
    fontSize: '1.4rem',
    alignItems: 'center',
    cursor: 'pointer',
  })

  const timeslotContainer = style({
    borderBottom: '1px solid #DDD',
  })

  const dropdownSS = style({
    maxHeight: '20em',
    overflowY: 'scroll',
    width: '100%'
  })

  const dropdown  = (
    <div {...dropdownSS}>
      {timeslots.map((timeslot) => {
        return (
          <div {...timeslotContainer} key={timeslot.checksum}>
            <div
              {...timeslotSS}
              key={timeslot.checksum}
              id={timeslot.checksum}
              className='timeslot'
              onClick={onTimeslotSelect}
            >
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
    <div {...timePickerContainer}>
      <div {...timePicker}>
        <div {...label}>TIME</div>
        <div {...input} onClick={onTimePickerClick}>Timeslot seleccionado</div>
        <div {...arrow} onClick={onTimePickerClick}>
          <IconArrow direction='down'/>
        </div>
      </div>
      { state === 'expanded' ? dropdown : null }
    </div>
  )
}

export default TimePicker
