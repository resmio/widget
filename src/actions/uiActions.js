// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Async actions use present and past tense to determine state
// (ex GUEST:ADDING GUEST:ADDED)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)
import { fetchAvailabilities } from './bookingActions'

// First Panel collapsing/expanding selectors
export const UI_DATE_SELECTOR_CHANGE_STATE = 'UI_DATE_SELECTOR_CHANGE_STATE'
export const UI_GUEST_SELECTOR_CHANGE_STATE = 'UI_GUEST_SELECTOR_CHANGE_STATE'
export const UI_TIME_SELECTOR_CHANGE_STATE = 'UI_TIME_SELECTOR_CHANGE_STATE'

// Timepicker
export const UI_TIME_PERIOD_ADVANCE = 'UI_TIME_PERIOD_ADVANCE'
export const UI_TIME_PERIOD_REDUCE = 'UI_TIME_PERIOD_REDUCE'

// Panel navigation
export const UI_PANEL_ADVANCE = 'UI_PANEL_ADVANCE'
export const UI_PANEL_REDUCE = 'UI_PANEL_REDUCE'

export const UI_NEW_BOOKING = 'UI_NEW_BOOKING'

export function appInit () {
  return (dispatch) => {
    // Not sure if this is an antipattern
    // But it looks like it's working
    dispatch(fetchAvailabilities())
  }
}

export function uiGuestSelectorChangeState () {
  return { type: UI_GUEST_SELECTOR_CHANGE_STATE }
}

export function uiTimeSelectorChangeState () {
  return { type: UI_TIME_SELECTOR_CHANGE_STATE }
}

export function uiDateSelectorChangeState () {
  return { type: UI_DATE_SELECTOR_CHANGE_STATE }
}

export function advancePanel () {
  return {
    type: UI_PANEL_ADVANCE,
    analytics: {}
  }
}

export function reducePanel () {
  return {
    type: UI_PANEL_REDUCE,
    analytics: {}
  }
}

export function advanceTimePeriod () {
  return { type: UI_TIME_PERIOD_ADVANCE }
}

export function reduceTimePeriod () {
  return { type: UI_TIME_PERIOD_REDUCE }
}

export function newBooking () {
  return {
    type: UI_NEW_BOOKING,
    analytics: {}
  }
}
