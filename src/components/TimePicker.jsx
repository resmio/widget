import React from 'react'
import {injectIntl, defineMessages} from 'react-intl';
import { style } from 'glamor'
import { colors } from '../styles/variables'

import ExpandableSelector from './ExpandableSelector'
import DropdownLabel from './DropdownLabel'
import Timeslots from './Timeslots'
import Spinner from './Spinner'

const messages = defineMessages({
    'ClosedMessage': {
      id: 'timepicker.closed',
      description: 'Message displayed when the facility is closed',
      defaultMessage: 'Sorry we are closed that day'
    },
    'CapacityMessage': {
      id: 'timepicker.capacity',
      description: 'Message displayed when the facility is full',
      defaultMessage: 'Sorry there\'s no more free seats for that day'
    },
    'TimeMessage': {
      id: 'timepicker.label',
      description: 'Timepicker label',
      defaultMessage: 'TIME'
    }
})

const timepickerContainer = style({
  marginTop: '1.2em'
})

const noAvailabilitiesMessage = style({
  color: colors.dustyGray,
  fontSize: '1.1em',
  lineHeight: '1.5',
  padding: '2em',
})

const TimePicker = ({
  color,
  dispatch,
  error,
  fetching,
  limit,
  state,
  timeSelected,
  timeslots,
  timePeriods,
  timePeriodSelected,
  onTimePeriodAdvance,
  onTimePeriodReduce,
  onTimePickerClick,
  onTimeSelect,
  intl
}) => {
  let dropdown

  // FIXME: Move this to a selector
  const closed = (!fetching && timeslots.length <= 0)
  const noAvailabilities = timeslots.filter((timeslot) => timeslot.available > 0).length <= 0
  const fullyBooked = !fetching && noAvailabilities

  const message = closed
    ? intl.formatMessage(messages.ClosedMessage)
    : intl.formatMessage(messages.CapacityMessage)

  if (error) {
    dropdown = <div>Something went wrong, please try again</div>
  } else if (fetching) {
    dropdown = <Spinner />
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
              onTimePeriodAdvance={onTimePeriodAdvance}
              onTimePeriodReduce={onTimePeriodReduce}
              onTimeSelect={onTimeSelect}
              timePeriods={timePeriods}
              timePeriodSelected={timePeriodSelected}
              timeslots={timeslots}
              timeSelected={timeSelected}
            />
          : <div {...noAvailabilitiesMessage}>{message}</div>
        }
      </div>
    )
  }

  return (
    <ExpandableSelector
      label={intl.formatMessage(messages.TimeMessage)}
      displayedInfo={timeSelected || 'Select time'}
      dropdown={dropdown}
      onExpandClicked={onTimePickerClick}
      state={state}
    />
  )
}

export default injectIntl(TimePicker)
