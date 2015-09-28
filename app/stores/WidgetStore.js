import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../constants/Constants';

const CHANGE_EVENT = 'CHANGE';

const state = {
  bookingDetails: {},
  numberPickerUiExpanded: false,
  maxNumberOfCovers: 25,
  numberOfCoversOnUi: 9,
  calendarCollapsedOnUi: true,
  timeslotCollapsedOnUi: true,
  availabilities: [],
  timeslot: {},
  covers: 2,
  facilityId: '',
  newsletter: true,
  date: new Date(),
  email: '',
  loaded: false,
  name: '',
  phone: '',
  showPanel: 1
};

class WidgetStore extends EventEmitter {

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

const _WidgetStore = new WidgetStore();

WidgetStore.dispatchToken = AppDispatcher.register((payload) => {
  const { action } = payload;

  switch (action.type) {

    case ActionTypes.BOOKING_POSTED:
      state.bookingDetails = action.bookingDetails;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.AVAILABILITIES_LOADED:
      state.loaded = true;
      state.availabilities = action.availabilities;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.COLLAPSED_DATE_CLICKED:
      state.calendarCollapsedOnUi = !state.calendarCollapsedOnUi;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.DATE_CHANGED:
      state.date = action.newDate;
      state.calendarCollapsedOnUi = !state.calendarCollapsedOnUi;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.EMAIL_CHANGED:
      state.email = action.email;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.FACILITY_INFO_LOADED:
      state.name = action.name;
      state.facilityId = action.id;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.NAME_CHANGED:
      state.name = action.name;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.NEWSLETTER_CHANGED:
      state.newsletter = !state.newsletter;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.NUMBER_OF_COVERS_CHANGED:
      state.covers = action.newCoverValue;
      state.numberPickerUiExpanded = false;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.PANEL_NUMBER_DECREASED:
      state.showPanel -= 1;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.PANEL_NUMBER_INCREASED:
      state.showPanel += 1;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.PERSON_PICKER_UI_STATE_CHANGED:
      state.numberPickerUiExpanded = !state.numberPickerUiExpanded;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.PHONE_CHANGED:
      state.phone = action.phone;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.TIMESLOT_SELECTED:
      state.timeslot = action.timeslot;
      state.timeslotCollapsedOnUi = true;
      _WidgetStore.emitChange();
      break;

    case ActionTypes.TIMESLOT_SELECTOR_EXPANDED:
      state.timeslotCollapsedOnUi = !state.timeslotCollapsedOnUi;
      _WidgetStore.emitChange();
      break;

    default:
      break;
  }
});

export default _WidgetStore;
