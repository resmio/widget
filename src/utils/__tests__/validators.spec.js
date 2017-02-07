import {isValidEmail} from '../validators'

const validEmails = [
  'email@[123.123.123.123]',
  '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',

  'much."more\ unusual"@example.com',
  'very.unusual."@".unusual.com@example.com',
  'very."(),:;<>[]".VERY."very@\\\\\\ \"very".unusual@strange.example.com'
]

describe('isValidEmail', () => {

  it('should return true for email@example.com', () => {
    const actual = isValidEmail('email@example.com')
    expect(actual).toEqual(true)
  }),

  it('should return true for firstname.lastname@example.com', () => {
    const actual = isValidEmail('firstname.lastname@example.com')
    expect(actual).toEqual(true)
  }),

  it('should return true for email@subdomain.example.com', () => {
    const actual = isValidEmail('firstname.lastname@example.com')
    expect(actual).toEqual(true)
  }),

  it('should return true for firstname+lastname@example.com', () => {
    const actual = isValidEmail('firstname+lastname@example.com')
    expect(actual).toEqual(true)
  }),

  it('should return true for email@123.123.123.123', () => {
    const actual = isValidEmail('email@123.123.123.123')
    expect(actual).toEqual(true)
  }),

  it('should return false for mariano@lefaltaunvera.', () => {
    const actual = isValidEmail('mariano@lefaltaunvera.')
    expect(actual).toEqual(false)
  })
})
