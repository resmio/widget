import * as actions from '../uiActions'

describe('user interface actions', () => {

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
