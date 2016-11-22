import {
  UI_CALENDAR_SWITCH_FOCUS,
  UI_GUEST_DROPDOWN_SWITCH,
  UI_TIMESLOT_SELECTOR_SWITCH,
  UI_PANEL_ADVANCE,
  UI_PANEL_REDUCE
} from '../actions/uiActions'

import {
  GUEST_SELECT,
  TIMESLOT_SELECT
} from '../actions/bookingActions'

function ui(state={}, action) {

  switch (action.type) {

    case UI_CALENDAR_SWITCH_FOCUS:
      return Object.assign({}, state, {
        calendarFocused: !state.calendarFocused
      })

    case UI_GUEST_DROPDOWN_SWITCH:
      return Object.assign({}, state, {
        guestSelectorCollapsed: !state.guestSelectorCollapsed
      })

    case UI_TIMESLOT_SELECTOR_SWITCH:
      return Object.assign({}, state, {
        timeslotSelectorCollapsed: !state.timeslotSelectorCollapsed
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

    case TIMESLOT_SELECT:
      return Object.assign({}, state, {
        timeslotSelectorCollapsed: !state.timeslotSelectorCollapsed
      })

    default:
      return state
  }
}

export default ui
