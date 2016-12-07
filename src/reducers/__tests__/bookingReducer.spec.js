import reducer from '../bookingReducer'
import {
  GUEST_ADD
} from '../../actions/bookingActions'

import state from '../../preloadedState'

describe('booking reducer', () => {

  it('should add a guest to the inital state', () => {
    const action = { type: GUEST_ADD }
    const expected = 2
    const actual = reducer(state.booking, action).selectedGuests

    expect(actual).toEqual(expected)
  })
})
