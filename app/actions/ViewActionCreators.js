import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiUtils from '../utils/ApiUtils';
import formatDateForApi from '../utils/formatDateForApi';

export default {
  // Actions which originate on the view, they can fire other actions
  // originating in the server for example

  changeNumberOfCovers(value) {
    if (!isNaN(value)) {
      AppDispatcher.handleViewAction({
        type: ActionTypes.NUMBER_OF_COVERS_CHANGED,
        newCoverValue: value
      });
    }
  },

  changeNumberPickerUiState() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PERSON_PICKER_UI_STATE_CHANGED
    });
  },

  collapsedDateClicked() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.COLLAPSED_DATE_CLICKED
    });
  },

  decreasePanelNumber() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PANEL_NUMBER_DECREASED
    });
  },

  emailChanged(email) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.EMAIL_CHANGED,
      email: email
    });
  },

  increasePanelNumber() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PANEL_NUMBER_INCREASED
    });
  },

  initializeWidget(facilityId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.ROOT_COMPONENT_MOUNTED
    });
    ApiUtils.requestFacilityInfo(facilityId);
  },

  nameChanged(name) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.NAME_CHANGED,
      name: name
    });
  },

  newsletterChanged() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.NEWSLETTER_CHANGED
    });
  },

  phoneChanged(phone) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PHONE_CHANGED,
      phone: phone
    });
  },

  postBooking(state) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.BOOKING_POSTED
    });
    ApiUtils.postBooking(state);
  },

  requestAvailabilities(facilityId, date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.AVAILABILITIES_REQUESTED,
      newDate: date
    });
    ApiUtils.requestAvailabilities(facilityId, formatDateForApi(date));
  },

  dateClicked(facilityId, date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DATE_CHANGED,
      newDate: date
    });
    ApiUtils.requestAvailabilities(facilityId, formatDateForApi(date));
  },

  timeslotsListNextClicked() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TIMESLOT_GROUP_INCREASED
    });
  },

  timeslotsListPreviousClicked() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TIMESLOT_GROUP_DECREASED
    });
  },

  timeslotSelected(timeslot) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TIMESLOT_SELECTED,
      timeslot: timeslot
    });
  },

  timeslotSelectorClicked() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TIMESLOT_SELECTOR_EXPANDED
    });
  }
};
