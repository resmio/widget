import * as actions from '../uiActions'

describe('user interface actions', () => {

  // this does not work
  xit('should dispatch an action to fetch availabilities on init', () => {
    expect(actions.appInit()).toMatchSnapshot()
  })

  it('should create an action to change the guest selector state', () => {
    expect(actions.uiGuestSelectorChangeState()).toMatchSnapshot()
  })

  it('should create an action to change the time selector state', () => {
    expect(actions.uiTimeSelectorChangeState()).toMatchSnapshot()
  })

  it('should create an action to change the date selector state', () => {
    expect(actions.uiDateSelectorChangeState()).toMatchSnapshot()
  })

  it('should create an action to advance the panel', () => {
    expect(actions.advancePanel()).toMatchSnapshot()
  })

  it('should create an action to reduce the panel', () => {
    expect(actions.reducePanel()).toMatchSnapshot()
  })

  it('should create an action to advance the time period', () => {
    expect(actions.advanceTimePeriod()).toMatchSnapshot()
  })

  it('should create an action to reduce the time period', () => {
    expect(actions.reduceTimePeriod()).toMatchSnapshot()
  })
})
