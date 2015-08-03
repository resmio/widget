import formatDateForApi from '../formatDateForApi';
import test from 'tape';

const setup = () => {
  const fixtures = {};
  fixtures.dateWithTwoDigitsDayAndMonth = new Date(2034, 11, 25);
  fixtures.dateWithOneDigitDayAndMonth = new Date(1994, 3, 8);
  fixtures.dateWithOneDigitDay = new Date(2001, 0, 1);
  fixtures.dateWithOneDigitMonth = new Date(1999, 6, 16);

  return fixtures;
};

const teardown = (fixtures) => {
  delete fixtures.dateWithTwoDigitsDayAndMonth;
  delete fixtures.dateWithOneDigitDayAndMonth;
  delete fixtures.dateWithOneDigitDay;
  delete fixtures.dateWithOneDigitMonth;
};

test('formatDateForApi always returns a ten digit string', (assert) => {
  const fixture = setup();

  const actual = {
    dateWithTwoDigitsDayAndMonth: formatDateForApi(fixture.dateWithTwoDigitsDayAndMonth),
    dateWithOneDigitDayAndMonth: formatDateForApi(fixture.dateWithOneDigitDayAndMonth),
    dateWithOneDigitDay: formatDateForApi(fixture.dateWithOneDigitDay),
    dateWithOneDigitMonth: formatDateForApi(fixture.dateWithOneDigitMonth)
  }

  const expected = {
    dateWithTwoDigitsDayAndMonth: '2034-12-25',
    dateWithOneDigitDayAndMonth: '1994-04-08',
    dateWithOneDigitDay: '2001-01-01',
    dateWithOneDigitMonth: '1999-07-16'
  }

  assert.deepEqual(actual.dateWithTwoDigitsDayAndMonth, expected.dateWithTwoDigitsDayAndMonth);
  assert.deepEqual(actual.dateWithOneDigitDayAndMonth, expected.dateWithOneDigitDayAndMonth);
  assert.deepEqual(actual.dateWithOneDigitDay, expected.dateWithOneDigitDay);
  assert.deepEqual(actual.dateWithOneDigitMonth, expected.dateWithOneDigitMonth);

  teardown(fixture);
  assert.end();
});
