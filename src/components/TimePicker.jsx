import React from 'react'

import ExpandableSelector from './ExpandableSelector'
import Timeslots from './Timeslots'

const TimePicker = ({
  timeslots,
  onTimePickerClick,
  onTimeSelect,
  state,
  dispatch
}) => {
  const dropdown = (
    <Timeslots
      timeslots={timeslots}
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
