// Don't use snapshots here
// (Unless you know ho to make the dates work with them)
import reducer from '../index'

import {
  AVAILABILITIES_FETCHING,
  AVAILABILITIES_FETCHING_ERROR,
  AVAILABILITIES_FETCHING_SUCCESS,
  CHECKBOX_CHANGED,
  DATE_SELECT,
  GUEST_SELECT,
  INPUT_CHANGED,
  TIME_SELECT
} from '../../actions/bookingActions'

import {
  UI_DATE_SELECTOR_CHANGE_STATE,
  UI_GUEST_SELECTOR_CHANGE_STATE,
  UI_TIME_SELECTOR_CHANGE_STATE,
  UI_PANEL_ADVANCE,
  UI_PANEL_REDUCE
} from '../../actions/uiActions'

import state from '../../testState'

describe('booking reducer', () => {

  it('should return the state when the action is unknown', () => {
    const action = { type: 'CARABIRURI' }
    const expected = state
    const actual = reducer(state, action)

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

describe('ui reducer', () => {

  it('should set availabilities fetching to true', () => {
    const action = { type: AVAILABILITIES_FETCHING }
    expect(reducer(state, action)).toMatchSnapshot()
  })

  it('should set availabilities fetching errors', () => {
    const action = { type: AVAILABILITIES_FETCHING_ERROR }
    expect(reducer(state, action)).toMatchSnapshot()
  })

  it('should clear error and pending on availabilities fetching success', () => {
    const action = {
      type: AVAILABILITIES_FETCHING_SUCCESS,
      response: {
        objects: state.availabilities
      }
    }
    expect(reducer(state, action)).toMatchSnapshot()
  })

  describe('date selector', () => {

    describe('on date selector change state', () => {
      it('should expand itself and collapse everything else if itself is not expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'collapsed',
            dateSelectorState: 'semicollapsed',
            timeSelectorState  : 'collapsed'
          }
        )
        const action = { type: UI_DATE_SELECTOR_CHANGE_STATE }
        const expected = 'collapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual('expanded')
        expect(actual.timeSelectorState).toEqual(expected)
      })

      it('should semicollapse everything if itself is expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'collapsed',
            dateSelectorState: 'expanded',
            timeSelectorState  : 'collapsed'
          }
        )
        const action = { type: UI_DATE_SELECTOR_CHANGE_STATE }
        const expected = 'semicollapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })
    })

    describe('on date select', () => {
      it('should expand itself and collapse everything else if itself is not expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'collapsed',
            dateSelectorState: 'semicollapsed',
            timeSelectorState  : 'collapsed'
          }
        )
        const action = { type: DATE_SELECT }
        const expected = 'collapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual('expanded')
        expect(actual.timeSelectorState).toEqual(expected)
      })

      it('should semicollapse everything if itself is expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'collapsed',
            dateSelectorState: 'expanded',
            timeSelectorState  : 'collapsed'
          }
        )
        const action = { type: DATE_SELECT }
        const expected = 'semicollapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })
    })
  })

  describe('guest selector', () => {

    describe('on guest selector change state', () => {
      it('should expand itself and collapse everything else if itself is not expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'semicollapsed',
            dateSelectorState: 'semicollapsed',
            timeSelectorState  : 'semicollapsed'
          }
        )
        const action = { type: UI_GUEST_SELECTOR_CHANGE_STATE }
        const expected = 'collapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual('expanded')
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })

      it('should semicollapse everything if itself is expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'expanded',
            dateSelectorState: 'collapsed',
            timeSelectorState  : 'collapsed'
          }
        )
        const action = { type: UI_GUEST_SELECTOR_CHANGE_STATE }
        const expected = 'semicollapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })
    })

    describe('on guest select', () => {
      it('should expand itself and collapse everything else if itself is not expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'semicollapsed',
            dateSelectorState: 'semicollapsed',
            timeSelectorState  : 'semicollapsed'
          }
        )
        const action = { type: GUEST_SELECT }
        const expected = 'collapsed'
        const actual = reducer(testState, action)

        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.guestSelectorState).toEqual('expanded')
        expect(actual.timeSelectorState).toEqual(expected)
      })

      it('should semicollapse everything if itself is expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'expanded',
            dateSelectorState: 'collapsed',
            timeSelectorState  : 'collapsed'
          }
        )
        const action = { type: GUEST_SELECT }
        const expected = 'semicollapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })
    })

  })

  describe('time selector', () => {

    describe('on time selector change state', () => {
      it('should expand itself and collapse everything else if itself is not expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'semicollapsed',
            dateSelectorState: 'semicollapsed',
            timeSelectorState  : 'semicollapsed'
          }
        )
        const action = { type: UI_TIME_SELECTOR_CHANGE_STATE }
        const expected = 'collapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual('expanded')
      })

      it('should semicollapse everything if itself is expanded', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'collapsed',
            dateSelectorState: 'collapsed',
            timeSelectorState  : 'expanded'
          }
        )
        const action = { type: UI_TIME_SELECTOR_CHANGE_STATE }
        const expected = 'semicollapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })
    })

    describe('on time select', () => {
      it('should semicollapse everything', () => {
        const testState = Object.assign(
          {}, state, {
            guestSelectorState: 'collapsed',
            dateSelectorState: 'collapsed',
            timeSelectorState  : 'expanded'
          }
        )
        const action = { type: TIME_SELECT }
        const expected = 'semicollapsed'
        const actual = reducer(testState, action)

        expect(actual.guestSelectorState).toEqual(expected)
        expect(actual.dateSelectorState).toEqual(expected)
        expect(actual.timeSelectorState).toEqual(expected)
      })
    })

  })

  it('should advance the panel on panel advance', () => {
    const testState = Object.assign(
      {}, state, {
        currentPanel: 1
      }
    )
    const action = { type: UI_PANEL_ADVANCE }
    const expected = 2
    const actual = reducer(testState, action).currentPanel

    expect(actual).toEqual(expected)
  })

  it('should reduce the panel on panel reduce', () => {
    const testState = Object.assign(
      {}, state, {
        currentPanel: 2
      }
    )
    const action = { type: UI_PANEL_REDUCE }
    const expected = 1
    const actual = reducer(testState, action).currentPanel

    expect(actual).toEqual(expected)
  })


})
