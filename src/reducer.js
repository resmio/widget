function reducer(state = {}, action) {

  switch (action.type) {

    case 'GUEST_REMOVE':
      if (state.selectedGuests > state.minGuests) {
        return Object.assign({}, state, {
          selectedGuests: state.selectedGuests - 1
        })
      } else {
        return state
      }

    case 'GUEST_ADD':
      if (state.selectedGuests < state.maxGuests) {
        return Object.assign({}, state, {
          selectedGuests: state.selectedGuests + 1
        })
      } else {
        return state
      }

    case 'UI_GUEST_DROPDOWN_OPEN':
      return Object.assign({}, state, {
        guestSelectorCollapsed: false
      })

    case 'GUEST_SELECT':
      return Object.assign({}, state, {
        selectedGuests: parseInt(action.payload, 10) + 1,
        guestSelectorCollapsed: true
      })

    case 'UI_CALENDAR_SWITCH_FOCUS':
      return Object.assign({}, state, {
        calendarFocused: !state.calendarFocused
      })

    case 'DATE_SELECT':
      return Object.assign({}, state, {
        selectedDate: action.payload
      })

    case 'UI_PANEL_ADVANCE':
      if (state.currentPanel < state.numberOfPanels) {
        return Object.assign({}, state, {
          currentPanel: state.currentPanel + 1
        })
      } else {
        return state
      }

    case 'UI_PANEL_REDUCE':
      if (state.currentPanel >= 2) {
        return Object.assign({}, state, {
          currentPanel: state.currentPanel - 1
        })
      } else {
        return state
      }

    case 'BOOKING_POST':
      console.log('BOOKING_POST')
      return state

    default:
      return state
  }
}

export default reducer
