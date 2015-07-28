import React from 'react';
import test from 'tape';

import { PayloadSources, ActionTypes } from '../constants/Constants';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import AppDispatcher from '../dispatchers/AppDispatcher';

const before = test;
const after = test;

const setup = () => {
  const fixtures = {};
  fixtures.availabilities = [1, 2, 3];
  fixtures.covers = 5;

  return fixtures;
};

const teardown = (fixtures) => {
  delete fixtures.availabilities;
  delete fixtures.covers;
};

test('Availabilities Store availabilities update after an AVAILABILITIES_LOADED action', (assert) => {
  const fixture = setup();

  AppDispatcher.dispatch({
    source: PayloadSources.SERVER_ACTION,
    action: { actionType: ActionTypes.AVAILABILITES_LOADED,
              availabilities: fixture.availabilities }
  });

  const expected = fixture.availabilities;
  const actual = AvailabilitiesStore.getState().availabilities;

  assert.deepEqual(actual, expected,
    'The store should get the Availabilities from the dispatcher');

  assert.equal(AvailabilitiesStore.getState().loaded, true,
    'switch loaded to true ');

  teardown(fixture);
  assert.end();
});
