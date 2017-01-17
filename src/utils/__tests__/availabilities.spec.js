import {getFutureAvailability} from '../availabilities'

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
  }
]

describe('getFutureAvailability', ()=>{
  it('should return the first availability after the time limit if it exists', () => {
    const options ={
      availabilities: availabilities,
      date: new Date('2017-01-14T09:30:00Z'),
      timeOffset: 200
    }
    const actual = getFutureAvailability(options)
    const expected = availabilities[1]
    expect(actual).toEqual(expected)
  })
})
