import React from 'react'
import {style, merge } from 'glamor'

import IconArrow from './IconArrow'

const container = style({
  alignItems: 'center',
  background: '#CCC',
  display: 'flex',
  fontSize: '1em',
  height: '4rem',
  left: '4%',
  lineHeight: '4rem',
  position: 'absolute',
  right: '4%',
})

const arrow = merge({
  cursor: 'pointer',
  flex: '1',
  height: '2rem',
  lineHeight: '2rem',
  ':hover': {
    color: 'white'
  }
})

const disabled = merge({
  cursor: 'normal',
  opacity: '0.2',
  ':hover': {
    color: 'black'
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
  const leftButton = timePeriodSelected <= 0
    ? (<div {...merge(arrow, left, disabled)}><IconArrow direction='left' size='1rem' /></div>)
    : (<div {...merge(arrow, left)} onClick={onTimePeriodReduce}><IconArrow direction='left' size='1rem' /></div>)

  const rightButton = timePeriodSelected >= 2
    ? (<div {...merge(arrow, right, disabled)}><IconArrow size='1rem'/></div>)
    : (<div {...merge(arrow, right)} onClick={onTimePeriodAdvance}><IconArrow size='1rem'/></div>)

  return (
    <div {...container}>
      { leftButton }
      <div {...legend}>{timePeriods[timePeriodSelected].name}</div>
      { rightButton }
    </div>
  )
}

export default TimeslotsFilter
