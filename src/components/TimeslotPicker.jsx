import React from 'react'
import { style, merge, select as $ } from 'glamor'
// import '../styles/TimeslotPicker.css'

import IconArrow from './IconArrow'

const container = style({
  borderTop: '1px solid #DDD',
  display: 'flex',
  fontSize: '1.4rem',
  height: '4rem',
  width: '100%',
  alignItems: 'center',
  cursor: 'pointer'
})

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

const timeslotContainer = style({
  borderBottom: '1px solid #F7F7F7'
})

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

const TimeslotPicker = ({timeslots, onTimeslotClick, onTimeslotSelect, collapsed}) => {
  const collapsedState = (
    <div {...container}>
      <div {...label}>TIME</div>
      <div {...input} onClick={onTimeslotClick}>Timeslot seleccionado</div>
      <div {...arrow} onClick={onTimeslotClick}>
        <IconArrow direction='down'/>
      </div>
    </div>
  )
  const expandedState  = (
    <div>
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
    collapsed ? collapsedState : expandedState
  )
}

export default TimeslotPicker
