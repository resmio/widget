import React from 'react'
import { style } from 'glamor'
import { colors } from '../styles/variables'

import ExpandableSelector from './ExpandableSelector'
import DropdownLabel from './DropdownLabel'
import Timeslots from './Timeslots'


const timepickerContainer = style({
  marginTop: '1.6rem'
})

const noAvailabilitiesMessage = style({
  padding: '2rem',
  fontSize: '1.1em',
  lineHeight: '1.5',
  color: colors.dustyGray,
  borderBottom: `1px solid ${colors.gallery}`
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
        {timeslots.length
          ? <Timeslots
              color={color}
              timePeriods={timePeriods}
              timePeriodSelected={timePeriodSelected}
              timeslots={timeslots}
              timeSelected={timeSelected}
              onTimePeriodAdvance={onTimePeriodAdvance}
              onTimePeriodReduce={onTimePeriodReduce}
              onTimeSelect={onTimeSelect}
            />
          : <div {...noAvailabilitiesMessage}>Sorry there's no more free seats for that day</div>
        }
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
