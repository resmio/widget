import reducer from '../bookingReducer'
import {
  GUEST_ADD,
  GUEST_REMOVE
} from '../../actions/bookingActions'

import state from '../../preloadedState'

describe('booking reducer', () => {

  it('should add a guest to the inital state', () => {
    const action = { type: GUEST_ADD }
    const expected = 2
    const actual = reducer(state.booking, action).selectedGuests

    expect(actual).toEqual(expected)
  })

  it('should not add a guest if its already at maxGuests', () => {
    state.booking.selectedGuests = 4
    state.booking.maxGuests = 4
    const action = { type: GUEST_ADD }

    const expected = 4
    const actual = reducer(state.booking, action).selectedGuests

    expect(actual).toEqual(expected)
  })

  it('should not remove a guest from the inital state', () => {
    const action = { type: GUEST_REMOVE }
    const expected = 1
    const actual = reducer(state.booking, action).selectedGuests

    expect(actual).toEqual(expected)
  })

})
