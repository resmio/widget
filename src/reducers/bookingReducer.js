import {
  GUEST_ADD,
  GUEST_REMOVE,
  GUEST_SELECT,
  DATE_SELECT,
  TIME_SELECT,
  BOOKING_POSTING,
  AVAILABILITIES_FETCHING_SUCCESS
} from '../actions/bookingActions'

import {
  UI_TIME_PERIOD_ADVANCE,
  UI_TIME_PERIOD_REDUCE
} from '../actions/uiActions'

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
        selectedGuests: parseInt(action.payload, 10) + 1
      })

    case DATE_SELECT:
      return Object.assign({}, state, {
        selectedDate: action.payload
      })

    case TIME_SELECT:
      return Object.assign({}, state, {
        selectedAvailability: action.payload
      })

    case AVAILABILITIES_FETCHING_SUCCESS:
      return Object.assign({}, state, {
        availabilities: action.response.objects
      })

    case UI_TIME_PERIOD_ADVANCE:
      return Object.assign({}, state, {
        timePeriodSelected: state.timePeriodSelected + 1,
        timeFocused: state.availabilities.filter(
          function(availability) {
            return availability.local_time_formatted === state.timePeriods[state.timePeriodSelected + 1].time
          }
        ).checksum
      })

    case UI_TIME_PERIOD_REDUCE:
      return Object.assign({}, state, {
        timePeriodSelected: state.timePeriodSelected - 1,
        timeFocused: state.timePeriods[state.timePeriodSelected - 1].time
      })

    case BOOKING_POSTING:
      console.log(BOOKING_POSTING)
      return state

    default:
      return state
    }
}

export default booking
