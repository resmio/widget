function reducer(state = {}, action) {

  switch (action.type) {

    case 'DECREMENT_GUEST':
      return Object.assign({}, state, {
        selectedGuests: state.selectedGuests - 1
      })

    case 'INCREMENT_GUEST':
      return Object.assign({}, state, {
        selectedGuests: state.selectedGuests + 1
      })

    default:
      return state
  }
}

export default reducer
