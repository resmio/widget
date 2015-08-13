import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../constants/Constants';

const CHANGE_EVENT = 'CHANGE';

const state = {
  availabilities: [],
  timeslot: {},
  covers: 2,
  newsletter: true,
  date: new Date(),
  email: '',
  loaded: false,
  name: '',
  phone: '',
  showPanel: 1
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

    case ActionTypes.EMAIL_CHANGED:
      state.email = action.email;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.NAME_CHANGED:
      state.name = action.name;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.NEWSLETTER_CHANGED:
      state.newsletter = !state.newsletter;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.NUMBER_OF_COVERS_CHANGED:
      state.covers = action.newCoverValue;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.PANEL_NUMBER_DECREASED:
      state.showPanel -= 1;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.PANEL_NUMBER_INCREASED:
      state.showPanel += 1;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.PHONE_CHANGED:
      state.phone = action.phone;
      _AvailabilitiesStore.emitChange();
      break;

    case ActionTypes.TIMESLOT_SELECTED:
      state.timeslot = action.timeslot;
      _AvailabilitiesStore.emitChange();
      break;

    default:
      break;
  }
});

export default _AvailabilitiesStore;
