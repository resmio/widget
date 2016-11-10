// panels

// guests
export function incrementGuest () {
  return { type: 'INCREMENT_GUEST' }
}

export function decrementGuest () {
  return { type: 'DECREMENT_GUEST' }
}

// date
export function changeDate (date) {
  return {
    type: 'CHANGE_DATE',
    date
  }
}
