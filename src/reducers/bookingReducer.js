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

function selectAvailability(availabilities, state) {

  if (state.availabilities.length === 0) {
    // Short circuit here if we don't have availabilities in the state yet
    return
  }

  // We get the time from the currently selected availability
  const availability = state.availabilities.filter((availability) => {
    return availability.checksum === state.selectedAvailability
  })[0]

  // We convert the time to an integer so we can compare it
  // We can make this better by:
  // getting the part before the colon and multiplying by 60
  // Adding the part after the colon
  // So we get the minutes after 00:00 and we can add times like 1:15 (75)
  // To convert back divide by 60 put the result before the semicolon and
  // the modulus after it
  const time = parseInt(availability.local_time_formatted.replace(/:/, ''))

  // same for the received availabilities, we extend them with our
  // 'magic' time
  const magicAvailabilities = availabilities.map((availability) => {
    availability.magicTime = parseInt(availability.local_time_formatted.replace(/:/, ''))
    return availability
  })
  // If we have an availability already selected we want to run our logic
  if (state.selectedAvailability !== '') {
  // If not we get the closest one two hours from now
  } else {
    // We want to return empty string so the selectedAvailability
    // is not set to undefined
    return ''
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
