import { getSelectedAvailability } from '../selectors'
import { isSameDay, toDecimalTime } from './dates'

export const getFutureAvailability = ({
  availabilities,
  date,
  timeOffset
}) => {

  const time = `${date.getHours()}:${date.getMinutes()}`
  const targetTime = toDecimalTime(time) + timeOffset

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

export const selectAvailability = ({
  availabilities,
  state,
  property
}) => {

  let availability

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
        timeOffset: 200
      })
    } else  {
      // If it's not today, we do not select an availability
      availability = {}
    }
  }

  if (typeof property !== undefined && availability[property]) {
    return availability[property]
  } else {
    return availability
  }
}
