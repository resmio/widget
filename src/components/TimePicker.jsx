import React from 'react'

import ExpandableSelector from './ExpandableSelector'
import Timeslots from './Timeslots'
import Spinner from './Spinner'

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
    dropdown = <Spinner />
  } else {
    dropdown = (
      <Timeslots
        timePeriods={timePeriods}
        timePeriodSelected={timePeriodSelected}
        timeslots={timeslots}
        onTimePeriodAdvance={onTimePeriodAdvance}
        onTimePeriodReduce={onTimePeriodReduce}
        onTimeSelect={onTimeSelect}
    />)
  }

  return (
    <ExpandableSelector
      label='TIME'
      displayedInfo={timeSelected || ''}
      onExpandClicked={onTimePickerClick}
      dropdown={dropdown}
      state={state}
    />
  )
}

export default TimePicker
