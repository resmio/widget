import {
  UI_DATE_SELECTOR_CHANGE_STATE,
  UI_GUEST_SELECTOR_CHANGE_STATE,
  UI_TIME_PERIOD_ADVANCE,
  UI_TIME_PERIOD_REDUCE,
  UI_TIME_SELECTOR_CHANGE_STATE,
  UI_PANEL_ADVANCE,
  UI_PANEL_REDUCE
} from '../actions/uiActions'

import {
  GUEST_SELECT,
  TIME_SELECT
} from '../actions/bookingActions'

function ui(state={}, action) {

  switch (action.type) {

    case UI_DATE_SELECTOR_CHANGE_STATE:
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

    case UI_TIME_PERIOD_ADVANCE:
      return Object.assign({}, state, {
        timePeriodSelected: state.timePeriodSelected + 1
      })

    case UI_TIME_PERIOD_REDUCE:
      return Object.assign({}, state, {
        timePeriodSelected: state.timePeriodSelected - 1
      })

    case UI_TIME_SELECTOR_CHANGE_STATE:
    case TIME_SELECT:
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

    case UI_PANEL_ADVANCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel + 1
      })

    case UI_PANEL_REDUCE:
      return Object.assign({}, state, {
        currentPanel: state.currentPanel - 1
      })

    default:
      return state
  }
}

export default ui
