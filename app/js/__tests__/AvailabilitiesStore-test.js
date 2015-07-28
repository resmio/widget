import React from 'react';
import {test} from 'tape';

import { PayloadSources, ActionTypes } from '../constants/Constants';
import AvailabilitiesStore from '../stores/AvailabilitiesStore';
import AppDispatcher from '../dispatchers/AppDispatcher';

const fixtures = {
  availabilities: [1, 2, 3],
  covers: 5
};

test('Availabilities Store updates after an AVAILABILITIES_LOADED action', (assert) => {
  AppDispatcher.dispatch({
    source: PayloadSources.SERVER_ACTION,
    action: { actionType: ActionTypes.AVAILABILITES_LOADED,
              availabilities: fixtures.availabilities }
  });

  const expected = fixtures.availabilities;
  const actual = AvailabilitiesStore.getState().availabilities;

  assert.deepEqual(actual, expected,
    'The store gets the Availabilities from the dispatcher');
  assert.end();
});

test('Covers in Availabilities Store update after a NUMBER_OF_COVERS_CHANGED action', (assert) => {
  AppDispatcher.dispatch({
    source: PayloadSources.VIEW_ACTION,
    action: { actionType: ActionTypes.NUMBER_OF_COVERS_CHANGED,
              newCoverValue: fixtures.covers }
  });

  const expected = fixtures.covers;

  assert.equal(AvailabilitiesStore.getState().covers, expected,
    'The store updates its cover value');
  assert.end();
})
