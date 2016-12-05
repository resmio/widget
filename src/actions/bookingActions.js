// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)
import { getSelectedAvailability } from '../selectors'

export const API = 'API'
export const AVAILABILITIES_FETCHING = 'AVAILABILITIES:FETCHING'
export const AVAILABILITIES_FETCHING_SUCCESS = 'AVAILABILITIES:FETCHING:SUCCESS'
export const AVAILABILITIES_FETCHING_ERROR = 'AVAILABILITIES:FETCHING:ERROR'
export const BOOKING_POSTING = 'BOOKING:POSTING'
export const BOOKING_POSTING_SUCCESS = 'BOOKING:POSTING:SUCCESS'
export const BOOKING_POSTING_ERROR = 'BOOKING:POSTING:ERROR'
export const CHECKBOX_CHANGED = 'CHECKBOX_CHANGED'
export const GUEST_ADD = 'GUEST_ADD'
export const GUEST_REMOVE = 'GUEST_REMOVE'
export const GUEST_SELECT = 'GUEST_SELECT'
export const INPUT_CHANGED = 'INPUT_CHANGED'
export const DATE_SELECT = 'DATE_SELECT'
export const TIME_SELECT = 'TIME_SELECT'

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
  return (dispatch) => {
    dispatch({type: DATE_SELECT, payload: date})
    dispatch(fetchAvailabilities(date))
  }
}

// AVAILABILITIES --------------------------------------------------------------
export function fetchAvailabilities (date) {
  console.log('fetchAvailabilities')
  return {
    type: API,
    payload: {
      url: `/availability?date__gte=${date.toJSON().substr(0,10)}`,
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
export function inputChanged (name, value) {
  return {
    type: INPUT_CHANGED,
    payload: {
      name: name,
      value: value
    }
  }
}

export function checkboxChanged (name, checked) {
  return {
    type: CHECKBOX_CHANGED,
    payload: {
      name: name,
      value: checked
    }
  }
}

export function postBooking () {
  return (dispatch, getState) => {
    dispatch({
      type: API,
      payload: {
        url: '/bookings',
        method: 'POST',
        body: state => ({
          num: state.booking.selectedGuests,
          date: getSelectedAvailability(state).date,
          name: state.booking.guestName,
          email: state.booking.guestName,
          phone: state.booking.guestPhone,
          checksum: state.booking.selectedAvailability,
          facility: `/v1/facility/${state.custom.facility}`,
          source: 'widget test',
          fb_access_token :null,
          resource_group: '',
          newsletter_subscribe: state.booking.newsletterSubscription,
          resmio_newsletter_subscribe :false,
          booking_request_parameters: {}
        }),
        pending: BOOKING_POSTING,
        success: BOOKING_POSTING_SUCCESS,
        error: BOOKING_POSTING_ERROR
      }
    })
  }
}
