import {
  BOOKING_POSTING,
  BOOKING_POSTING_ERROR,
  BOOKING_POSTING_SUCCESS,
  CHECKBOX_CHANGED,
  GUEST_SELECT,
  DATE_SELECT,
  INPUT_CHANGED,
  TIME_SELECT,
  AVAILABILITIES_FETCHING_SUCCESS
} from '../actions/bookingActions'

import {
  UI_NEW_BOOKING
} from '../actions/uiActions'

import { getSelectedAvailability } from '../selectors'
import { selectAvailability } from '../utils/availabilities'

function booking (state = {}, action) {

  switch (action.type) {

    case GUEST_SELECT:
      const availability = getSelectedAvailability({booking:state})
      const available = (availability && availability.available >= action.payload)

      return Object.assign({}, state, {
        selectedGuests: action.payload,
        selectedAvailability: available ? state.selectedAvailability : ''
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
      return Object.assign({}, state, {
        status: action.response.status
      })

    case BOOKING_POSTING_ERROR:
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
