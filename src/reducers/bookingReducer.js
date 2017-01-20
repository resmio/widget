import {
  BOOKING_POSTING,
  BOOKING_POSTING_ERROR,
  BOOKING_POSTING_SUCCESS,
  CHECKBOX_CHANGED,
  GUEST_ADD,
  GUEST_REMOVE,
  GUEST_SELECT,
  DATE_SELECT,
  INPUT_CHANGED,
  TIME_SELECT,
  AVAILABILITIES_FETCHING_SUCCESS
} from '../actions/bookingActions'

import {
  UI_NEW_BOOKING
} from '../actions/uiActions'

import { selectAvailability } from '../utils/availabilities'

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
        selectedAvailability: selectAvailability({
          availabilities: action.response.objects,
          state: state,
          property: 'checksum'
        })
      })

    case BOOKING_POSTING:
      return Object.assign({}, state, {
        status: 'pending'
      })

    case BOOKING_POSTING_SUCCESS:
      console.log(action)
      return Object.assign({}, state, {
        status: action.response.status
      })

    case BOOKING_POSTING_ERROR:
      console.log(action)
      return Object.assign({}, state, {
        status: 'error'
      })

    case UI_NEW_BOOKING:
      return Object.assign({}, state, {
        status: 'pending'
      })

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
