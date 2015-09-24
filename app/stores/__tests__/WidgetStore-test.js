import test from 'tape';
import { PayloadSources, ActionTypes } from '../../constants/Constants';
import WidgetStore from '../../stores/WidgetStore';
import AppDispatcher from '../../dispatchers/AppDispatcher';

const setup = () => {
  const fixtures = {};
  fixtures.availabilities = [1, 2, 3];
  fixtures.covers = 5;
  fixtures.bookingDetails = {
    testa: 'pikachu',
    testb: 'charizard'
  };

  return fixtures;
};

const teardown = (fixtures) => {
  delete fixtures.availabilities;
  delete fixtures.covers;
  delete fixtures.bookingDetails;
};

test('WidgetStore availabilities update after an AVAILABILITIES_LOADED action', (assert) => {
  const fixture = setup();

  AppDispatcher.dispatch({
    source: PayloadSources.SERVER_ACTION,
    action: { actionType: ActionTypes.AVAILABILITES_LOADED,
              availabilities: fixture.availabilities }
  });

  const expected = fixture.availabilities;
  const actual = WidgetStore.getState().availabilities;

  assert.deepEqual(actual, expected,
    'The store should get the Availabilities from the dispatcher');

  assert.equal(WidgetStore.getState().loaded, true,
    'switch loaded to true ');

  teardown(fixture);
  assert.end();
});

// test('WidgetStore has booking details after a BOOKING_POSTED action', (assert) => {
//   const fixture = setup();
//
//   AppDispatcher.dispatch({
//     source: PayloadSources.SERVER_ACTION,
//     action: { actionType: ActionTypes.BOOKING_POSTED,
//               bookingDetails: fixture.bookingDetails }
//   });
//
//   const expected = fixture.bookingDetails;
//   const actual = WidgetStore.getState().bookingDetails;
//
//   assert.deepEqual(actual, expected,
//     'The store should get the Booking Details from the dispatcher');
//
//   teardown(fixture);
//   assert.end();
// });
