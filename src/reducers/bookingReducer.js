import {
  GUEST_ADD,
  GUEST_REMOVE,
  GUEST_SELECT,
  DATE_SELECT,
  BOOKING_POSTING
} from '../actions/bookingActions'

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

    case BOOKING_POSTING:
      console.log(BOOKING_POSTING)
      return state

    default:
      return state
    }
}

export default booking
