import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../constants/Constants';
const assign = require('react/lib/Object.assign');

const events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

const state = {
  availabilities: [1, 2, 3],
  loaded: false
};

const setState = (newState) => {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
};

const AvailabilitiesStore = {

  addChangeListener(fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener(fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState() {
    return state;
  }

};

AvailabilitiesStore.dispatchToken = AppDispatcher.register((payload) => {
  const { action } = payload;

  if (action.type === ActionTypes.AVAILABILITIES_LOADED) {
    setState({
      loaded: true,
      availabilities: action.availabilities
    });
  }
});

export default AvailabilitiesStore;
