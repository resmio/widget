import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../constants/Constants';

const CHANGE_EVENT = 'CHANGE';

const state = {
  availabilities: [],
  covers: 2,
  date: new Date(),
  loaded: false
};

class AvailabilitiesStore extends EventEmitter {

  getState() {
    return state;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn);
  }

  removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn);
  }

}

const _AvailabilitiesStore = new AvailabilitiesStore();

AvailabilitiesStore.dispatchToken = AppDispatcher.register((payload) => {
  const { action } = payload;

  switch (action.type) {

    case ActionTypes.AVAILABILITIES_LOADED:
      state.loaded = true;
      state.availabilities = action.availabilities;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.DATE_CHANGED:
      state.date = action.newDate;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.NUMBER_OF_COVERS_CHANGED:
      state.covers = action.newCoverValue;
      _AvailabilitiesStore.emitChange();
      break;

    default:
      break;
  }
});

export default _AvailabilitiesStore;
