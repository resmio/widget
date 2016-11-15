// guests
export function incrementGuest () {
  return { type: 'GUESTCOUNT_INCREASED' }
}

export function decrementGuest () {
  return { type: 'GUESTCOUNT_DECREASED' }
}

export function guestSelectorClicked () {
  return { type: 'OPEN_GUESTS_DROPDOWN' }
}

export function guestNumberClicked (e) {
  return {
    type: 'GUESTS_SELECTED',
    payload: e.target.id
  }
}

// date
export function changeSelectedDate (date) {
  return {
    type: 'DATE_CHANGED',
    payload: date
  }
}

export function switchCalendarFocus () {
  return { type: 'CALENDAR_FOCUS_SWITCHED' }
}

// timeslots
export function selectTimeslot (e) {
  return {
    type: 'TIMESLOT_SELECTED',
    payload: e.target.checksum
  }
}

// panels
export function increasePanel () {
  return {
    type: 'PANEL_INCREASED'
  }
}

export function decreasePanel () {
  return {
    type: 'PANEL_DECREASED'
  }
}

export function postBooking () {
  return {
    type: 'BOOKING_POSTED'
  }
}
