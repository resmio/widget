import * as actions from '../bookingActions'

describe('booking actions', () => {

  it('should create an action to select a guest', () => {
    const fakeEvent = {target: {id: 1}}
    expect(actions.selectGuest(fakeEvent)).toMatchSnapshot()
  })

  it('should create an action to select a date', () => {
    const fakeDate = new Date('Wed Dec 07 2016 11:39:06 GMT+0100 (CET)')
    expect(actions.selectDate(fakeDate)).toMatchSnapshot()
  })

  it('should create an action to select a time', () => {
    expect(actions.selectTime('123')).toMatchSnapshot()
  })

  it('should create an action to check a checkbox', () => {
    expect(actions.checkboxChanged('a', true)).toMatchSnapshot()
  })

  it('should create an action to uncheck a checkbox', () => {
    expect(actions.checkboxChanged('b', false)).toMatchSnapshot()
  })

})
