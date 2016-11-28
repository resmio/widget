import React from 'react'
import {style, merge } from 'glamor'

import IconArrow from './IconArrow'

const container = style({
  background: '#CCC',
  display: 'flex',
  alignItems: 'center',
  height: '4rem',
  fontSize: '1em',
  lineHeight: '4rem'
})

const arrow = merge({
  flex: '1',
  height: '2rem',
  lineHeight: '2rem',
  cursor: 'pointer',
  ':hover': {
    color: 'white'
  }
})

const left = style({
  textAlign: 'right'
})

const right = style({
  textAlign: 'left'
})

const legend = style({
  flex: '1',
  padding: '0 2em',
  textAlign: 'center'
})


const TimeslotsFilter = ({
  timePeriods,
  timePeriodSelected,
  onTimePeriodAdvance,
  onTimePeriodReduce
}) => {
  return (
    <div {...container}>
      <div {...merge(arrow, left)} onClick={onTimePeriodReduce}><IconArrow direction='left' size='1rem' /></div>
      <div {...legend}>{timePeriods[timePeriodSelected].name}</div>
      <div {...merge(arrow, right)} onClick={onTimePeriodAdvance}><IconArrow size='1rem'/></div>
    </div>
  )
}

export default TimeslotsFilter
