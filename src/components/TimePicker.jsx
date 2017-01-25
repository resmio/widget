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
  limit,
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
  const closed = !fetching && timeslots.length <= 0
  const fullyBooked = !fetching && timeslots.filter((timeslot) => timeslot.available > 0).length <= 0

  const message = closed ? 'Sorry we are closed that day' : 'Sorry there\'s no more free seats for that day'

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
        {!fullyBooked
          ? <Timeslots
              color={color}
              limit={limit}
              timePeriods={timePeriods}
              timePeriodSelected={timePeriodSelected}
              timeslots={timeslots}
              timeSelected={timeSelected}
              onTimePeriodAdvance={onTimePeriodAdvance}
              onTimePeriodReduce={onTimePeriodReduce}
              onTimeSelect={onTimeSelect}
            />
          : <div {...noAvailabilitiesMessage}>{message}</div>
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
