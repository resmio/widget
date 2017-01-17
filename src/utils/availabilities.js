import { getSelectedAvailability } from '../selectors'
import { isSameDay, toLinuxTimestamp, toMilliseconds } from './dates'

export const getFutureAvailability = ({
  availabilities,
  date,
  timeOffsetInMilliseconds
}) => {
  const targetTime = toLinuxTimestamp(date) + timeOffsetInMilliseconds

  const selectedAvailability = availabilities.find((availability) => {
    return (toLinuxTimestamp(availability.date) >= targetTime)
  })

  return selectedAvailability ? selectedAvailability : {}
}

export const getSameTimeAvailability = ({
  nextAvailabilities,
  selectedAvailabilityTime
}) => {
  return nextAvailabilities.find((availability) => {
    return availability.local_time_formatted === selectedAvailabilityTime
    }
  )
}

export const selectAvailability = ({
  availabilities,
  state,
  property
}) => {

  let availability = {}

  if (state.selectedAvailability !== '') {
    // If we have an availability already selected
    // we check if one availability for the same time is available in the new date
    const selectedTime = (
      getSelectedAvailability({booking: state}).local_time_formatted
    )

    availability = getSameTimeAvailability({
      nextAvailabilities: availabilities,
      selectedAvailabilityTime: selectedTime
    })

  } else {
    // If we don't have an availability already selected
    const today = isSameDay(new Date(), state.selectedDate.toDate())

    if (today) {
      // If it is today we select the first availability 2 hours from now
      availability = getFutureAvailability({
        availabilities: availabilities,
        date: new Date(),
        timeOffsetInMilliseconds: toMilliseconds({hours: 2})
      })
    }
  }

  if (typeof property !== undefined && typeof availability[property] !== undefined) {
    return availability[property]
  } else {
    return availability || {}
  }
}
