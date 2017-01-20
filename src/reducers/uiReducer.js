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
  BOOKING_POSTING_SUCCESS,
  BOOKING_POSTING_ERROR,
  DATE_SELECT,
  GUEST_SELECT,
  TIME_SELECT,
} from '../actions/bookingActions'

function ui(state={}, action) {

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
      return Object.assign({}, state, {
        availabilitiesError: false,
        availabilitiesFetching: false
      })

    case BOOKING_POSTING_SUCCESS:
    case BOOKING_POSTING_ERROR:
      return Object.assign({}, state, {
        currentPanel: 3
      })

    case UI_DATE_SELECTOR_CHANGE_STATE:
    case DATE_SELECT:
      // If it is expanded everything goes back to semicollapsed
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
    case GUEST_SELECT:
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

    case TIME_SELECT:
      return Object.assign({}, state, {
        guestSelectorState: 'semicollapsed',
        dateSelectorState: 'semicollapsed',
        timeSelectorState  : 'semicollapsed',
        // timeFocused: action.payload
      })

    case UI_PANEL_ADVANCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel + 1
      })

    case UI_PANEL_REDUCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel - 1
      })

    case UI_NEW_BOOKING:
    return Object.assign({}, state, {
      currentPanel: 1
    })

    default:
      return state
  }
}

export default ui
