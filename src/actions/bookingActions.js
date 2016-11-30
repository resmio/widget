// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)

export const GUEST_ADD = 'GUEST_ADD'
export const GUEST_REMOVE = 'GUEST_REMOVE'
export const GUEST_SELECT = 'GUEST_SELECT'
export const DATE_SELECT = 'DATE_SELECT'
export const TIME_SELECT = 'TIME_SELECT'
export const BOOKING_POSTING = 'BOOKING:POSTING'
export const AVAILABILITIES_FETCHING = 'AVAILABILITIES:FETCHING'
export const AVAILABILITIES_FETCHING_SUCCESS = 'AVAILABILITIES:FETCHING:SUCCESS'
export const AVAILABILITIES_FETCHING_ERROR = 'AVAILABILITIES:FETCHING:ERROR'
export const API = 'API'

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

// AVAILABILITIES --------------------------------------------------------------
export function fetchAvailabilities () {
  return {
    type: API,
    payload: {
      url: `the-fish/availability?date__gte=${new Date().toJSON().substr(0,10)}`,
      pending: AVAILABILITIES_FETCHING,
      success: AVAILABILITIES_FETCHING_SUCCESS,
      error: AVAILABILITIES_FETCHING_ERROR
    }
  }
}

// TIMESLOTS -------------------------------------------------------------------
export function selectTime (checksum) {
  return {
    type: TIME_SELECT,
    payload: checksum
  }
}

// FORM ------------------------------------------------------------------------
export function postBooking () {
  return { type: BOOKING_POSTING }
}
