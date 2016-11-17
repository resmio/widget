// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Async actions use present and past tense to determine state
// (ex GUEST:ADDING GUEST:ADDED)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)

// GUEST
export function addGuest () {
  return { type: 'GUEST_ADD' }
}

export function removeGuest () {
  return { type: 'GUEST_REMOVE' }
}

export function guestSelect (e) {
  return {
    type: 'GUEST_SELECT',
    payload: e.target.id
  }
}

// DATE
export function dateSelect (date) {
  return {
    type: 'DATE_SELECT',
    payload: date
  }
}

// TIMESLOTS
export function timeslotSelect (e) {
  return {
    type: 'TIMESLOT_SELECT',
    payload: e.target.checksum
  }
}

// UI
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

// FORM
export function postBooking () {
  return { type: 'BOOKING_POST' }
}
