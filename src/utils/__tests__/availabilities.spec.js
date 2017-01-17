import {
  getFutureAvailability,
  getSameTimeAvailability,
  selectAvailability
} from '../availabilities'

import state from '../../preloadedState'

const availabilities = [
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
  },
  {
    available: 4,
    available_authenticated: 4,
    checksum: 'd51af10252da467bcb49ee7ae723ed37',
    date: '2017-01-14T22:30:00Z',
    id: null,
    local_date_formatted: '14 January 2017, 13:30',
    local_time_formatted: '13:30',
    message: null,
    price_change: 0,
    resource_uri: '/v1/facility/meson-california-2/availability/1484433000'
  },
  {
    available: 4,
    available_authenticated: 4,
    checksum: 'd599f04df45112ef1478cd477d238128',
    date: '2017-01-14T23:00:00Z',
    id: null,
    local_date_formatted: '14 January 2017, 14:00',
    local_time_formatted: '14:00',
    message: null,
    price_change: 0,
    resource_uri: '/v1/facility/meson-california-2/availability/1484434800'
  }
]

describe('getFutureAvailability', ()=>{
  it('should return the first availability after the time limit if it exists', () => {
    const options ={
      availabilities: availabilities,
      date: new Date('2017-01-14T19:30:00Z'),
      timeOffsetInMilliseconds: (2*60*60*1000)
    }
    const actual = getFutureAvailability(options)
    const expected = availabilities[1]
    expect(actual).toEqual(expected)
  }),
  it('should return an empty object if no availability after the offset exists', () => {
    const options ={
      availabilities: availabilities,
      date: new Date('2017-01-14T19:30:00Z'),
      timeOffsetInMilliseconds: (5*60*60*1000)
    }
    const actual = getFutureAvailability(options)
    const expected = {}
    expect(actual).toEqual(expected)
  })
})

describe('getSameTimeAvailability', ()=>{
  it('should return an availability for the same time if it exists', () => {
    const options ={
      availabilities: availabilities,
      time: availabilities[1].local_time_formatted
    }
    const actual = getSameTimeAvailability(options)
    const expected = availabilities[1]
    expect(actual).toEqual(expected)
  }),
  it('should return an empty object if no availability with the same time exists', () => {
    const options ={
      availabilities: availabilities,
      time: '18:30'
    }
    const actual = getSameTimeAvailability(options)
    const expected = {}
    expect(actual).toEqual(expected)
  })
})

describe('getSelectedAvailability', ()=>{
  // this function is still not fully tested, but it will do for now
  it('should return an availability for the same time if it exists', () => {
    state.booking.selectAvailability = state.booking.availabilities[0].checksum
    const options ={
      availabilities: availabilities,
      state: state.booking,
      property: 'checksum'
    }
    const actual = selectAvailability(options)
    const expected = availabilities[4].checksum
    expect(actual).toEqual(expected)
  })
  it('should return an object if no property is given and an availability for the same time exists', () => {
    state.booking.selectAvailability = state.booking.availabilities[0].checksum
    const options ={
      availabilities: availabilities,
      state: state.booking
    }
    const actual = selectAvailability(options)
    const expected = availabilities[4]
    expect(actual).toEqual(expected)
  })
})
