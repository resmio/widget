import {
  UI_DATE_SELECTOR_CHANGE_STATE,
  UI_GUEST_SELECTOR_CHANGE_STATE,
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

    case UI_DATE_SELECTOR_CHANGE_STATE:
      // If it is expanded everything goes back to semicollapsed
      if (state.dateSelectorState === 'expanded') {
        return Object.assign({}, state, {
          guestSelectorState: 'semicollapsed',
          dateSelectorState: 'semicollapsed',
          timeslotSelectorState: 'semicollapsed'
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          guestSelectorState: 'collapsed',
          dateSelectorState: 'expanded',
          timeslotSelectorState: 'collapsed'
        })
      }

    case UI_GUEST_SELECTOR_CHANGE_STATE:
    case GUEST_SELECT:
      // If it is expanded everything goes back to semicollapsed
      if (state.guestSelectorState === 'expanded') {
        return Object.assign({}, state, {
          guestSelectorState: 'semicollapsed',
          dateSelectorState: 'semicollapsed',
          timeslotSelectorState: 'semicollapsed'
        })
      // If it's not we expand it and collpase the other two
      } else {
        return Object.assign({}, state, {
          guestSelectorState: 'expanded',
          dateSelectorState: 'collapsed',
          timeslotSelectorState: 'collapsed'
        })
      }

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

    case TIMESLOT_SELECT:
      return Object.assign({}, state, {
        timeslotSelectorCollapsed: !state.timeslotSelectorCollapsed
      })

    default:
      return state
  }
}

export default ui
