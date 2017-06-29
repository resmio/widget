// Rules
// Action types must have a namespace (ex GUEST_ADD)
// Namespace must come before the action type
// Async actions use : instead of _ (GUEST:ADDING)
// Error actions append _ERROR to the action type (TODO_ADD_ERROR)
import { getSelectedAvailability } from '../selectors'

export const API = 'API'
export const APP_INIT = 'APP_INIT'
export const FACILITY_FETCHING = 'FACILITY:FETCHING'
export const FACILITY_FETCHING_SUCCESS = 'FACILITY:FETCHING:SUCCESS'
export const FACILITY_FETCHING_ERROR = 'FACILITY:FETCHING:ERROR'
export const AVAILABILITIES_FETCHING = 'AVAILABILITIES:FETCHING'
export const AVAILABILITIES_FETCHING_SUCCESS = 'AVAILABILITIES:FETCHING:SUCCESS'
export const AVAILABILITIES_FETCHING_ERROR = 'AVAILABILITIES:FETCHING:ERROR'
export const BOOKING_POSTING = 'BOOKING:POSTING'
export const BOOKING_POSTING_SUCCESS = 'BOOKING:POSTING:SUCCESS'
export const BOOKING_POSTING_ERROR = 'BOOKING:POSTING:ERROR'
export const CHECKBOX_CHANGED = 'CHECKBOX_CHANGED'
export const GUEST_SELECT = 'GUEST_SELECT'
export const INPUT_CHANGED = 'INPUT_CHANGED'
export const DATE_SELECT = 'DATE_SELECT'
export const TIME_SELECT = 'TIME_SELECT'

// GUEST COUNTER ---------------------------------------------------------------
export function selectGuest (e) {
  return {
    type: GUEST_SELECT,
    payload: parseInt(e.target.id, 10) + 1,
    analytics: {
      numberOfGuestsSelected: parseInt(e.target.id, 10) + 1
    }
  }
}

// DATE ------------------------------------------------------------------------
export function selectDate (date) {
  return (dispatch) => {
    dispatch({
      type: DATE_SELECT,
      payload: date,
      analytics: {
        date: date
      }
    })
    dispatch(fetchAvailabilities())
  }
}

// FACILITY --------------------------------------------------------------------
export function fetchFacility () {
  return (dispatch, getState) => {
    dispatch({
      type: API,
      payload: {
        url: '',
        pending: FACILITY_FETCHING,
        success: FACILITY_FETCHING_SUCCESS,
        error: FACILITY_FETCHING_ERROR
      }
    })
  }
}

// AVAILABILITIES --------------------------------------------------------------
export function fetchAvailabilities () {
  return  (dispatch, getState) => {
    const date = getState().widget.selectedDate.toJSON().substr(0,10)
    dispatch({
      type: API,
      payload: {
        url: `/availability?date__gte=${date}`,
        pending: AVAILABILITIES_FETCHING,
        success: AVAILABILITIES_FETCHING_SUCCESS,
        error: AVAILABILITIES_FETCHING_ERROR
      }
    })
  }
}

// TIMESLOTS -------------------------------------------------------------------
export function selectTime (checksum) {
  return {
    type: TIME_SELECT,
    payload: checksum,
    analytics: {}
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

// POSTING TO CREATE THE BOOKING
export function postBooking () {
  return (dispatch, getState) => {
    dispatch({
      type: API,
      payload: {
        url: '/bookings',
        method: 'POST',
        body: ({widget}) => ({
          num: widget.selectedGuests,
          date: getSelectedAvailability(widget).date,
          name: widget.guestName,
          email: widget.guestEmail,
          phone: widget.guestPhone,
          comment: widget.guestComment,
          price_change: getSelectedAvailability(widget).price_change,
          checksum: widget.selectedAvailability,
          facility: `/v1/facility/${widget.facility}`,
          source: 'widget test',
          fb_access_token :null,
          newsletter_subscribe: widget.newsletterSubscription,
        }),
        pending: BOOKING_POSTING,
        success: BOOKING_POSTING_SUCCESS,
        error: BOOKING_POSTING_ERROR
      },
      analytics: {}
    })
  }
}
