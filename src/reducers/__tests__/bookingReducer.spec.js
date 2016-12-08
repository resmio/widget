import reducer from '../bookingReducer'
import {
  GUEST_ADD,
  GUEST_REMOVE,
  GUEST_SELECT
} from '../../actions/bookingActions'

import preloadedState from '../../preloadedState'

// We only need the booking part of the state
const state = preloadedState.booking

describe('booking reducer', () => {

  it('should add a guest to the inital state', () => {
    const action = { type: GUEST_ADD }
    const expected = 2
    const actual = reducer(state, action).selectedGuests

    expect(actual).toEqual(expected)
  })

  it('should remove a guest', () => {
    const testState = Object.assign(
      {}, state, {
        selectedGuests: 3
      }
    )

    const action = { type: GUEST_REMOVE }
    const expected = 2
    const actual = reducer(testState, action).selectedGuests

    expect(actual).toEqual(expected)
  })

  it('should not add a guest if it\'s already at maxGuests', () => {
    const testState = Object.assign(
      {}, state, {
        selectedGuests: 4,
        maxGuests: 4
      }
    )

    const action = { type: GUEST_ADD }

    const expected = 4
    const actual = reducer(testState, action).selectedGuests

    expect(actual).toEqual(expected)
  })

  it('should not remove a guest if it\'s already at min guests', () => {
    const testState = Object.assign(
      {}, state, {
        selectedGuests: 1
      }
    )
    const action = { type: GUEST_REMOVE }
    const expected = 1
    const actual = reducer(testState, action).selectedGuests

    expect(actual).toEqual(expected)
  })

  it('should select a specific number of guests', () => {
    const testState = Object.assign({}, state)
    const action = {
      type: GUEST_SELECT,
      payload: 4
    }
    const expected = 4
    const actual = reducer(testState, action).selectedGuests

    expect(actual).toEqual(expected)
  })

})
