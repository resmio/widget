// Don't use snapshots here
// (Unless you know ho to make the dates work with them)
import reducer from '../bookingReducer'
import {
  AVAILABILITIES_FETCHING_SUCCESS,
  CHECKBOX_CHANGED,
  DATE_SELECT,
  GUEST_ADD,
  GUEST_REMOVE,
  GUEST_SELECT,
  INPUT_CHANGED,
  TIME_SELECT
} from '../../actions/bookingActions'

import preloadedState from '../../preloadedState'

// We only need the booking part of the state
const state = preloadedState.booking

describe('booking reducer', () => {

  it('should return the state when the action is unknown', () => {
    const action = { type: 'CARABIRURI' }
    const expected = state
    const actual = reducer(state, action)

    expect(actual).toEqual(expected)
  })

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

  it('should select a date', () => {
    const testState = Object.assign({}, state)
    const action = {
      type: DATE_SELECT,
      payload: '2016-12-08T06:53:54.716Z'
    }
    const expected = '2016-12-08T06:53:54.716Z'
    const actual = reducer(testState, action).selectedDate

    expect(actual).toEqual(expected)
  })

  it('should change a field when its input changes', () => {
    const testState = Object.assign({}, state)
    const action = {
      type: INPUT_CHANGED,
      payload: {
        name: 'guestName',
        value: 'Jenaro'
      }
    }
    const expected = 'Jenaro'
    const actual = reducer(testState, action).guestName

    expect(actual).toEqual(expected)
  })

  it('should change a field when its checkbox changes', () => {
    const testState = Object.assign({}, state)
    const action = {
      type: CHECKBOX_CHANGED,
      payload: {
        name: 'newsletterSubscription',
        value: true
      }
    }
    const expected = true
    const actual = reducer(testState, action).newsletterSubscription

    expect(actual).toEqual(expected)
  })

  it('should select a time', () => {
    const testState = Object.assign({}, state)
    const action = {
      type: TIME_SELECT,
      payload: 'carabiruri'
    }
    const expected = 'carabiruri'
    const actual = reducer(testState, action).selectedAvailability

    expect(actual).toEqual(expected)
  })

  it('should assign availabilities', () => {
    const testState = Object.assign({}, state)
    const testResponse = {
      objects: [
        {
          available: 4,
          available_authenticated: 4,
          checksum: 'f4d944bdd70b424b13b0519409138be3',
          date: '2017-01-14T21:00:00Z',
          id: null,
          local_date_formatted: '14 January 2017, 12:00',
          local_time_formatted: '12:00',
          message: null,
          price_change: 0,
          resource_uri: '/v1/facility/meson-california-2/availability/1484427600'
        },
        {
          available: 4,
          available_authenticated: 4,
          checksum: 'dd6f5c8dc0370ade0a69fc48f7b21532',
          date: '2017-01-14T21:30:00Z',
          id: null,
          local_date_formatted: '14 January 2017, 12:30',
          local_time_formatted: '12:30',
          message: null,
          price_change: 0,
          resource_uri: '/v1/facility/meson-california-2/availability/1484429400'
        },
        {
          available: 4,
          available_authenticated: 4,
          checksum: '4b2489d492c77b807655517dbe5a7c60',
          date: '2017-01-14T22:00:00Z',
          id: null,
          local_date_formatted: '14 January 2017, 13:00',
          local_time_formatted: '13:00',
          message: null,
          price_change: 0,
          resource_uri: '/v1/facility/meson-california-2/availability/1484431200'
        }
      ]
    }

    const action = {
      type: AVAILABILITIES_FETCHING_SUCCESS,
      response: testResponse
    }

    const expected = testResponse.objects
    const actual = reducer(testState, action).availabilities

    expect(actual).toEqual(expected)
  })

})
