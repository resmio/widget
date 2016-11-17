// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Async actions use present and past tense to determine state
// (ex GUEST:ADDING GUEST:ADDED)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)

export const UI_GUEST_DROPDOWN_OPEN = 'UI_GUEST_DROPDOWN_OPEN'
export const UI_CALENDAR_SWITCH_FOCUS = 'UI_CALENDAR_SWITCH_FOCUS'
export const UI_PANEL_ADVANCE = 'UI_PANEL_ADVANCE'
export const UI_PANEL_REDUCE = 'UI_PANEL_REDUCE'

export function uiOpenGuestDropdown () {
  return { type: 'UI_GUEST_DROPDOWN_OPEN' }
}

export function uiSwitchCalendarFocus () {
  return { type: 'UI_CALENDAR_SWITCH_FOCUS' }
}

export function advancePanel () {
  return { type: 'UI_PANEL_ADVANCE' }
}

export function reducePanel () {
  return { type: 'UI_PANEL_REDUCE' }
}
