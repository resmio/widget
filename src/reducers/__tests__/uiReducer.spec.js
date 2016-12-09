import reducer from '../uiReducer'

import {
  UI_DATE_SELECTOR_CHANGE_STATE,
  UI_GUEST_SELECTOR_CHANGE_STATE,
  UI_TIME_SELECTOR_CHANGE_STATE,
  UI_PANEL_ADVANCE,
  UI_PANEL_REDUCE
} from '../../actions/uiActions'

import {
  AVAILABILITIES_FETCHING,
  AVAILABILITIES_FETCHING_ERROR,
  AVAILABILITIES_FETCHING_SUCCESS,
  DATE_SELECT,
  GUEST_SELECT,
  TIME_SELECT,
} from '../../actions/bookingActions'

import preloadedState from '../../preloadedState'

// We only need the ui part of the state
const state = preloadedState.ui

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
    const action = { type: AVAILABILITIES_FETCHING_SUCCESS }
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
