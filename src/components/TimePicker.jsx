import React from 'react'

import ExpandableSelector from './ExpandableSelector'
import Timeslots from './Timeslots'

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
  error
}) => {
  const dropdown = (
    error
      ? (<div>OOPS</div>)
      : (<Timeslots
          timePeriods={timePeriods}
          timePeriodSelected={timePeriodSelected}
          timeslots={timeslots}
          onTimePeriodAdvance={onTimePeriodAdvance}
          onTimePeriodReduce={onTimePeriodReduce}
          onTimeSelect={onTimeSelect}
        />)
  )

  return (
    <ExpandableSelector
      label='TIME'
      displayedInfo={timeSelected}
      onExpandClicked={onTimePickerClick}
      dropdown={dropdown}
      state={state}
    />
  )
}

export default TimePicker
