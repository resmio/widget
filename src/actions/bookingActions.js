// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Async actions use present and past tense to determine state
// (ex GUEST:ADDING GUEST:ADDED)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)

export const GUEST_ADD = 'GUEST_ADD'
export const GUEST_REMOVE = 'GUEST_REMOVE'
export const GUEST_SELECT = 'GUEST_SELECT'
export const DATE_SELECT = 'DATE_SELECT'
export const TIMESLOT_SELECT = 'TIMESLOT_SELECT'
export const BOOKING_POST = 'BOOKING_POST'

// GUEST COUNTER ---------------------------------------------------------------

export function addGuest () {
 return { type: GUEST_ADD }
}

export function removeGuest () {
  return { type: GUEST_REMOVE }
}

export function selectGuest (e) {
  return {
    type: GUEST_SELECT,
    payload: e.target.id
  }
}

// DATE ------------------------------------------------------------------------
export function selectDate (date) {
  return {
    type: DATE_SELECT,
    payload: date
  }
}

// TIMESLOTS -------------------------------------------------------------------
export function selectTimeslot (e) {
  return {
    type: TIMESLOT_SELECT,
    payload: e.target.checksum
  }
}

// FORM ------------------------------------------------------------------------
export function postBooking () {
  return { type: BOOKING_POST }
}
