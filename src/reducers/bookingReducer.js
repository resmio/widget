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

    case 'UI_GUEST_DROPDOWN_OPEN':
      return Object.assign({}, state, {
        guestSelectorCollapsed: false
      })


    case 'UI_CALENDAR_SWITCH_FOCUS':
      return Object.assign({}, state, {
        calendarFocused: !state.calendarFocused
      })

    case 'UI_PANEL_ADVANCE':
      if (state.currentPanel < state.numberOfPanels) {
        return Object.assign({}, state, {
          currentPanel: state.currentPanel + 1
        })
      } else {
        return state
      }

    case 'UI_PANEL_REDUCE':
      if (state.currentPanel >= 2) {
        return Object.assign({}, state, {
          currentPanel: state.currentPanel - 1
        })
      } else {
        return state
      }
  }
}

export default booking
