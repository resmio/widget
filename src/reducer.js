function reducer(state = {}, action) {

  switch (action.type) {

    case 'GUESTCOUNT_INCREASED':
      if (state.selectedGuests > state.minGuests) {
        return Object.assign({}, state, {
          selectedGuests: state.selectedGuests - 1
        })
      } else {
        return state
      }

    case 'GUESTCOUNT_DECREASED':
      if (state.selectedGuests < state.maxGuests) {
        return Object.assign({}, state, {
          selectedGuests: state.selectedGuests + 1
        })
      } else {
        return state
      }

    case 'OPEN_GUESTS_DROPDOWN':
      return Object.assign({}, state, {
        guestSelectorCollapsed: false
      })

    case 'GUESTS_SELECTED':
      return Object.assign({}, state, {
        selectedGuests: parseInt(action.payload, 10) + 1,
        guestSelectorCollapsed: true
      })

    case 'CALENDAR_FOCUS_SWITCHED':
      return Object.assign({}, state, {
        calendarFocused: !state.calendarFocused
      })

    case 'DATE_CHANGED':
      return Object.assign({}, state, {
        selectedDate: action.payload
      })

    case 'PANEL_INCREASED':
      if (state.currentPanel < state.numberOfPanels) {
        return Object.assign({}, state, {
          currentPanel: state.currentPanel + 1
        })
      } else {
        return state
      }

    case 'PANEL_DECREASED':
      if (state.currentPanel >= 2) {
        return Object.assign({}, state, {
          currentPanel: state.currentPanel - 1
        })
      } else {
        return state
      }

    case 'BOOKING_POSTED':
      console.log('BOOKING_POSTED')
      return state

    default:
      return state
  }
}

export default reducer