// I feel like all this logic needs a serious rewrite
// Probably implies redesigning the state to something that makes more sense
// And use selectors everywhere to wire state to components, instead of
// relying on the state directly
import { getSelectedAvailability } from '../selectors'
import { isSameDay, toLinuxTimestamp, toMilliseconds } from './dates'

export const getFutureAvailability = ({
  availabilities,
  date,
  timeOffsetInMilliseconds,
  spots
}) => {
  const targetTime = toLinuxTimestamp(date) + timeOffsetInMilliseconds

  const selectedAvailability = availabilities.find((availability) => {
    return (toLinuxTimestamp(availability.date) >= targetTime && availability.available >= spots)
  })

  return selectedAvailability ? selectedAvailability : {}
}

export const getSameTimeAvailability = ({
  availabilities,
  time,
  spots
}) => {
  const availability = availabilities.find((availability) => {
    return (
      availability.local_time_formatted === time && availability.available >= spots
    )
  })
  return availability ?  availability : {}
}

export const selectAvailability = ({
  availabilities,
  state,
  property
}) => {

  let availability = {}
  const selectedAvailability = getSelectedAvailability(state)

  if (state.selectedAvailability !== '' && selectedAvailability) {
    // If we have an availability already selected
    // we check if one availability for the same time is available in the new date
    const selectedTime = selectedAvailability.local_time_formatted

    availability = getSameTimeAvailability({
      availabilities: availabilities,
      time: selectedTime,
      spots: state.selectedGuests
    })

  } else {
    // If we don't have an availability already selected
    const today = isSameDay(new Date(), state.selectedDate.toDate())

    if (today) {
      // If it is today we select the first availability 2 hours from now
      availability = getFutureAvailability({
        availabilities: availabilities,
        date: new Date(),
        spots: state.selectedGuests,
        timeOffsetInMilliseconds: toMilliseconds({hours: 2})
      })
    }
  }

  if (typeof property !== 'undefined' && typeof availability[property] !== 'undefined') {
    return availability[property]
  } else {
    return availability || {}
  }
}
