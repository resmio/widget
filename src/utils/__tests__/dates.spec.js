import {toMilliseconds} from '../dates'

describe('to Milliseconds', () => {
  it('should convert hours to milliseconds', () => {
    const actual = toMilliseconds({hours: 3})
    const expected = 10800000

    expect(actual).toEqual(expected)
  })

  it('should convert minutes to milliseconds', () => {
    const actual = toMilliseconds({minutes: 18})
    const expected = 18 * 60 * 1000

    expect(actual).toEqual(expected)
  })

  it('should convert hours and minutes to milliseconds', () => {
    const actual = toMilliseconds({hours: 7, minutes: 18})
    const expected = ( 7 * 60 * 60 * 1000) + (18 * 60 * 1000)

    expect(actual).toEqual(expected)
  })
})
