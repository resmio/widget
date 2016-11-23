// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Async actions use present and past tense to determine state
// (ex GUEST:ADDING GUEST:ADDED)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)

export const UI_DATE_SELECTOR_CHANGE_STATE = 'UI_DATE_SELECTOR_CHANGE_STATE'
export const UI_GUEST_SELECTOR_CHANGE_STATE = 'UI_GUEST_SELECTOR_CHANGE_STATE'
export const UI_PANEL_ADVANCE = 'UI_PANEL_ADVANCE'
export const UI_PANEL_REDUCE = 'UI_PANEL_REDUCE'
export const UI_TIMESLOT_SELECTOR_SWITCH = 'UI_TIMESLOT_SELECTOR_SWITCH'

export function uiGuestSelectorChangeState () {
  return { type: UI_GUEST_SELECTOR_CHANGE_STATE }
}

export function uiSwitchTimeslot () {
  return { type: UI_TIMESLOT_SELECTOR_SWITCH }
}

export function uiDateSelectorChangeState () {
  return { type: UI_DATE_SELECTOR_CHANGE_STATE }
}

export function advancePanel () {
  return { type: UI_PANEL_ADVANCE }
}

export function reducePanel () {
  return { type: UI_PANEL_REDUCE }
}
