// TODO: Move expanded collapsed logic to a separate function
import {
  UI_DATE_SELECTOR_CHANGE_STATE,
  UI_GUEST_SELECTOR_CHANGE_STATE,
  UI_NEW_BOOKING,
  UI_TIME_SELECTOR_CHANGE_STATE,
  UI_PANEL_ADVANCE,
  UI_PANEL_REDUCE
} from '../actions/uiActions'

import {
  AVAILABILITIES_FETCHING,
  AVAILABILITIES_FETCHING_ERROR,
  AVAILABILITIES_FETCHING_SUCCESS,
  BOOKING_POSTING,
  BOOKING_POSTING_ERROR,
  BOOKING_POSTING_SUCCESS,
  CHECKBOX_CHANGED,
  DATE_SELECT,
  GUEST_SELECT,
  INPUT_CHANGED,
  TIME_SELECT,
} from '../actions/bookingActions'

import { getSelectedAvailability } from '../selectors'
import { selectAvailability } from '../utils/availabilities'

function reducer (state = {}, action) {

  switch (action.type) {

    case AVAILABILITIES_FETCHING:
      return Object.assign({}, state, {
        availabilitiesFetching: true
      })

    case AVAILABILITIES_FETCHING_ERROR:
      return Object.assign({}, state, {
        availabilitiesError: true,
        availabilitiesFetching: false
      })

    case AVAILABILITIES_FETCHING_SUCCESS:
      const selectedAvailability = selectAvailability({
        availabilities: action.response.objects,
        state: state,
        property: 'checksum'
      })

      return Object.assign({}, state, {
        availabilities: action.response.objects,
        availabilitiesError: false,
        availabilitiesFetching: false,
        selectedAvailability: selectedAvailability
      })

    case GUEST_SELECT:
      const availability = getSelectedAvailability(state)
      const available = (availability && availability.available >= action.payload)

      if (state.guestSelectorState === 'expanded') {
        return Object.assign({}, state, {
          selectedGuests: action.payload,
          selectedAvailability: available ? state.selectedAvailability : '',
          guestSelectorState: 'semicollapsed',
          dateSelectorState: 'semicollapsed',
          timeSelectorState  : 'semicollapsed'
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          selectedGuests: action.payload,
          selectedAvailability: available ? state.selectedAvailability : '',
          guestSelectorState: 'expanded',
          dateSelectorState: 'collapsed',
          timeSelectorState  : 'collapsed'
        })
      }

    case DATE_SELECT:
    // This expanding/collapsing logic should probaby be moved out of here
    // If it is expanded everything goes back to semicollapsed
      if (state.dateSelectorState === 'expanded') {
        return Object.assign({}, state, {
          guestSelectorState: 'collapsed',
          dateSelectorState: 'collapsed',
          timeSelectorState  : 'expanded',
          selectedDate: action.payload
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          guestSelectorState: 'collapsed',
          dateSelectorState: 'expanded',
          timeSelectorState  : 'collapsed',
          selectedDate: action.payload
        })
      }

    case INPUT_CHANGED:
    case CHECKBOX_CHANGED:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value
      })

    case TIME_SELECT:
      return Object.assign({}, state, {
        guestSelectorState: 'semicollapsed',
        dateSelectorState: 'semicollapsed',
        timeSelectorState  : 'semicollapsed',
        selectedAvailability: action.payload
      })

    case BOOKING_POSTING:
      return Object.assign({}, state, {
        status: 'pending'
      })

    case BOOKING_POSTING_SUCCESS:
      return Object.assign({}, state, {
        currentPanel: 3,
        status: action.response.status,
        bookingId: action.response.id
      })

    case BOOKING_POSTING_ERROR:
      return Object.assign({}, state, {
        currentPanel: 3,
        status: 'error'
      })

    case UI_DATE_SELECTOR_CHANGE_STATE:
      if (state.dateSelectorState === 'expanded') {
        return Object.assign({}, state, {
          guestSelectorState: 'semicollapsed',
          dateSelectorState: 'semicollapsed',
          timeSelectorState  : 'semicollapsed'
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          guestSelectorState: 'collapsed',
          dateSelectorState: 'expanded',
          timeSelectorState  : 'collapsed'
        })
      }

    case UI_GUEST_SELECTOR_CHANGE_STATE:
      // If it is expanded everything goes back to semicollapsed
      if (state.guestSelectorState === 'expanded') {
        return Object.assign({}, state, {
          guestSelectorState: 'semicollapsed',
          dateSelectorState: 'semicollapsed',
          timeSelectorState  : 'semicollapsed'
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          guestSelectorState: 'expanded',
          dateSelectorState: 'collapsed',
          timeSelectorState  : 'collapsed'
        })
      }

    case UI_PANEL_ADVANCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel + 1
      })

    case UI_PANEL_REDUCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel - 1
      })

    case UI_TIME_SELECTOR_CHANGE_STATE:
      // If it is expanded everything goes back to semicollapsed
      if (state.timeSelectorState === 'expanded') {
        return Object.assign({}, state, {
          guestSelectorState: 'semicollapsed',
          dateSelectorState: 'semicollapsed',
          timeSelectorState  : 'semicollapsed'
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          guestSelectorState: 'collapsed',
          dateSelectorState: 'collapsed',
          timeSelectorState  : 'expanded'
        })
      }

    case UI_NEW_BOOKING:
      return Object.assign({}, state, {
        currentPanel: 1,
        status: 'pending'
      })

    default:
      return state
    }
}

export default reducer
