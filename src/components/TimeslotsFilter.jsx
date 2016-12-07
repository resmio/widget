import React from 'react'
import {style, merge } from 'glamor'

import IconArrow from './IconArrow'

const container = style({
  background: '#CCC',
  display: 'flex',
  alignItems: 'center',
  height: '4rem',
  fontSize: '1em',
  lineHeight: '4rem',
  position: 'absolute',
  right: '4%',
  left: '4%'
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

const disabled = merge({
  opacity: '0.2',
  cursor: 'normal',
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
