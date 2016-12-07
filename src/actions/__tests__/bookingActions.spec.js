import * as actions from '../bookingActions'

describe('booking actions', () => {

  it('should create an action to add a guest', () => {
    expect(actions.addGuest()).toMatchSnapshot()
  })

  it('should create an action to remove a guest', () => {
    expect(actions.removeGuest()).toMatchSnapshot()
  })

  it('should create an action to select a guest', () => {
    const fakeEvent = {target: {id: 1}}
    expect(actions.selectGuest(fakeEvent)).toMatchSnapshot()
  })

})
