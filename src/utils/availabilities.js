import { getSelectedAvailability } from '../selectors'
import { isSameDay, toDecimalTime } from './dates'

export const getFutureAvailability = ({
  availabilities,
  timeOffset
}) => {
  const today = new Date()
  const now = `${today.getHours()}:${today.getMinutes()}`
  const targetTime = toDecimalTime(now) + timeOffset

  return availabilities.find((availability) => {
    return (toDecimalTime(availability.local_time_formatted) >= targetTime)
  })
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

export const selectAvailability = (nextAvailabilities, state) => {

  if (state.selectedAvailability !== '') {
    // If we have an availability already selected
    // we check if one availability for the same time is available in the new date
    const selectedTime = (
      getSelectedAvailability({booking: state}).local_time_formatted
    )

    return getSameTimeAvailability({
      nextAvailabilities: nextAvailabilities,
      selectedAvailabilityTime: selectedTime
    })

  } else {
    // If we don't have an availability already selected
    const today = isSameDay(new Date(), state.selectedDate.toDate())

    if (today) {
      // If it is today we select the first availability 2 hours from now
      return getFutureAvailability({
        availabilities: nextAvailabilities,
        timeOffset: 200
      })
    } else  {
      // If it's not today, we do not select an availability
      return ''
    }
  }
}
