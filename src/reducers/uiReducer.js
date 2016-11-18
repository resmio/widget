import {
  UI_CALENDAR_SWITCH_FOCUS,
  UI_GUEST_DROPDOWN_OPEN,
  UI_PANEL_ADVANCE,
  UI_PANEL_REDUCE
} from '../actions/uiActions'

import {
  GUEST_SELECT
} from '../actions/bookingActions'

function ui(state={}, action) {

  switch (action.type) {

    case UI_CALENDAR_SWITCH_FOCUS:
      return Object.assign({}, state, {
        calendarFocused: !state.calendarFocused
      })

    case UI_GUEST_DROPDOWN_OPEN:
      return Object.assign({}, state, {
        guestSelectorCollapsed: false
      })

    case UI_PANEL_ADVANCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel + 1
      })

    case UI_PANEL_REDUCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel - 1
      })

    case GUEST_SELECT:
      return Object.assign({}, state, {
        guestSelectorCollapsed: true
      })

    default:
      return state
  }
}

export default ui
