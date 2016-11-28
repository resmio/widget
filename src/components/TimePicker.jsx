import React from 'react'

import ExpandableSelector from './ExpandableSelector'
import Timeslots from './Timeslots'

const TimePicker = ({
  timeslots,
  timePeriods,
  timePeriodSelected,
  onTimePeriodAdvance,
  onTimePeriodReduce,
  onTimePickerClick,
  onTimeSelect,
  state,
  dispatch
}) => {
  const dropdown = (
    <Timeslots
      timePeriods={timePeriods}
      timePeriodSelected={timePeriodSelected}
      timeslots={timeslots}
      onTimePeriodAdvance={onTimePeriodAdvance}
      onTimePeriodReduce={onTimePeriodReduce}
      onTimeSelect={onTimeSelect}
    />
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
