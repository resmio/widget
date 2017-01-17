import React from 'react'

import { style } from 'glamor'
import { colors } from '../styles/variables'
import ExpandableSelector from './ExpandableSelector'
import Timeslots from './Timeslots'

const label = style({
  color: colors.silver,
  flex: '1',
  paddingLeft: '1em'
})

const TimePicker = ({
  timeSelected,
  timeslots,
  timePeriods,
  timePeriodSelected,
  onTimePeriodAdvance,
  onTimePeriodReduce,
  onTimePickerClick,
  onTimeSelect,
  state,
  dispatch,
  error,
  fetching
}) => {
  let dropdown
  if (error) {
    dropdown = <div>OOPS</div>
  } else if (fetching) {
    dropdown = <div>FETCHING</div>
  } else {
    dropdown = (
      <div {...label}>
        TIME {timeSelected || 'Select time'}
        <Timeslots
          timePeriods={timePeriods}
          timePeriodSelected={timePeriodSelected}
          timeslots={timeslots}
          onTimePeriodAdvance={onTimePeriodAdvance}
          onTimePeriodReduce={onTimePeriodReduce}
          onTimeSelect={onTimeSelect}
        />
      </div>
    )
  }

  return (
    <ExpandableSelector
      label='TIME'
      displayedInfo={timeSelected || 'Select time'}
      onExpandClicked={onTimePickerClick}
      dropdown={dropdown}
      state={state}
    />
  )
}

export default TimePicker
