import {
  CHECKBOX_CHANGED,
  GUEST_ADD,
  GUEST_REMOVE,
  GUEST_SELECT,
  DATE_SELECT,
  INPUT_CHANGED,
  TIME_SELECT,
  AVAILABILITIES_FETCHING_SUCCESS
} from '../actions/bookingActions'

import { getSelectedAvailability } from '../selectors'

function getFutureAvailability({
  availabilities,
  time,
  timeOffset
}) {
  const targetTime = toDecimalTime(time) + timeOffset
  return availabilities.find((availability) => {
    return (toDecimalTime(availability.local_time_formatted) >= targetTime)
  }).checksum
}

function getSameTimeAvailability({
  nextAvailabilities,
  selectedAvailabilityTime
}) {
  const it = nextAvailabilities.find((availability) => {
    return availability.local_time_formatted === selectedAvailabilityTime
    }
  )

  return it.checksum
}

function isToday(date) {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getYear() === today.getYear()
    )
}

function toDecimalTime(time) {
  const timeStr = (
    time
      .match(/\d+/g)
      .map((numStr) => numStr.length < 2 ? 0 + numStr : numStr )
      .join('')
  )
  return parseInt(timeStr, 10)
}

function selectAvailability(nextAvailabilities, state) {

  if (state.selectedAvailability !== '') {
    // If we have an availability already selected, we check if one availability
    // for the same time is available in the new date
    console.log('availability selected so we try to getSameTimeAvailability')
    return getSameTimeAvailability({
      nextAvailabilities: nextAvailabilities,
      selectedAvailabilityTime: getSelectedAvailability(state).local_time_formatted
    })
  } else {
    // If we don't have an availability already selected
    console.log('no availability selected ')
    if (!isToday(state.selectedDate.toDate())) {
      console.log('not today so we do nothing')
      // If it's not today, we do nothing
      return ''
    } else  {
      console.log('today so we select an avaialbility in the future')
      // If it is today we select the first availability 2 hours from now
      const now = new Date()
      // This calculation needs to be moved to the getFutureAvailability function
      // so it works with whatever we throw at it
      const nowTime = `${now.getHours()}:${now.getMinutes()}`

      const hola = getFutureAvailability({
        availabilities: nextAvailabilities,
        time: nowTime,
        timeOffset: 200
      })

      return hola
    }
  }
}

function booking (state = {}, action) {

  switch (action.type) {

    case GUEST_ADD:
      if (state.selectedGuests < state.maxGuests) {
        return Object.assign({}, state, {
          selectedGuests: state.selectedGuests + 1
        })
      } else {
        return state
      }

    case GUEST_REMOVE:
      if (state.selectedGuests > state.minGuests) {
        return Object.assign({}, state, {
          selectedGuests: state.selectedGuests - 1
        })
      } else {
        return state
      }

    case GUEST_SELECT:
      return Object.assign({}, state, {
        selectedGuests: action.payload
      })

    case DATE_SELECT:
      return Object.assign({}, state, {
        selectedDate: action.payload
      })

    case INPUT_CHANGED:
    case CHECKBOX_CHANGED:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value
      })

    case TIME_SELECT:
      return Object.assign({}, state, {
        selectedAvailability: action.payload
      })

    case AVAILABILITIES_FETCHING_SUCCESS:
      return Object.assign({}, state, {
        availabilities: action.response.objects,
        selectedAvailability: selectAvailability(
          action.response.objects, state
        )
      })
    // Not yet implemented but the action works
    // case BOOKING_POSTING_SUCCESS:
    //   console.log(action.response)
    //   return state

    // This suff is shaky, probably need to move the timeFocused
    // part of it to a selector

    // case UI_TIME_PERIOD_ADVANCE:
    //   return Object.assign({}, state, {
    //     timePeriodSelected: state.timePeriodSelected + 1,
    //     timeFocused: state.availabilities.filter(
    //       function(availability) {
    //         return availability.local_time_formatted === state.timePeriods[state.timePeriodSelected + 1].time
    //       }
    //     ).checksum
    //   })
    //
    // case UI_TIME_PERIOD_REDUCE:
    //   return Object.assign({}, state, {
    //     timePeriodSelected: state.timePeriodSelected - 1,
    //     timeFocused: state.timePeriods[state.timePeriodSelected - 1].time
    //   })

    default:
      return state
    }
}

export default booking
