import React from 'react'
import { style } from 'glamor'

import ExpandableSelector from './ExpandableSelector'
import DropdownLabel from './DropdownLabel'
import Timeslots from './Timeslots'


const timepickerContainer = style({
  marginTop: '1.6rem'
})

const TimePicker = ({
  color,
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
      <div {...timepickerContainer}>
        <DropdownLabel color={color}>
          Select time
        </DropdownLabel>
        <Timeslots
          color={color}
          timePeriods={timePeriods}
          timePeriodSelected={timePeriodSelected}
          timeslots={timeslots}
          timeSelected={timeSelected}
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
