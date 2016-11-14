// panels

// guests
export function incrementGuest () {
  return { type: 'INCREMENT_GUEST' }
}

export function decrementGuest () {
  return { type: 'DECREMENT_GUEST' }
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
