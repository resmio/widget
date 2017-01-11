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

function getAvailability(availabilities, time, timeOffset) {
  return availabilities.find((availability) => {
    return (
      toDecimalTime(availability.local_time_formatted) >= toDecimalTime(time) + timeOffset)
  })
}

function getSameTimeAvailability(
  currentAvailabilities,
  newAvailabilities,
  selectedAvailability
) {
  // We get the currently selected availability
  const currentAvailability = findAvailabilityByChecksum(
    currentAvailabilities, selectedAvailability
  )

  const it = newAvailabilities.find((element)=>{
    return element.local_time_formatted === currentAvailability.local_time_formatted}
  )

  return it
}

function findAvailabilityByChecksum(availabilities, checksum) {
  const es = availabilities.find((availability) => {
    return availability.checksum = checksum
  })

  return es
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
    return parseInt(time.replace(/:/, ''), 10)
}

function selectAvailability(availabilities, state) {

  // Short circuit here if we don't have availabilities in the state yet
  // we need to have availabilities there, so
  // TODO: find a way to wait for them OR fire this on availabilities fetch success instead
  if (!state.availabilities.length) {
    console.log('No availabilities yet!')
    return
  }

  if (state.selectedAvailability !== {} && typeof state.selectedAvailability !== 'undefined') {
    // If we have an availability already selected, we check if one availability
    // for the same time is available in the new date
    debugger
    return getSameTimeAvailability(state.availabilities, availabilities, state.selectedAvailability.checksum)
  } else {
    // If we don't have an availability already selected
    if (!isToday(state.selectedDate.toDate())) {
      // If it's not today, we do nothing
      return ''
    } else  {
      // If it is today we select the first availability 2 hours from now
      const now = new Date()
      // This calculation needs to be moved to the getAvailability function
      // so it works with whatever we throw at it
      const nowTime = `${now.getHours()}:${now.getMinutes()}`

      const hola = getAvailability(availabilities, nowTime, 200)
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
