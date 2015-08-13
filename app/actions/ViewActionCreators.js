import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiUtils from '../utils/ApiUtils';
import formatDateForApi from '../utils/formatDateForApi';

export default {

  // Actions which originate on the view, they can fire other actions
  // originating in the server for example

  timeslotSelected(timeslot) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TIMESLOT_SELECTED,
      timeslot: timeslot
    });
  },

  requestAvailabilities(date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.AVAILABILITIES_REQUESTED,
      newDate: date
    });
    ApiUtils.requestAvailabilities(formatDateForApi(date));
  },

  changeNumberOfCovers(value) {
    if (!isNaN(value)) {
      AppDispatcher.handleViewAction({
        type: ActionTypes.NUMBER_OF_COVERS_CHANGED,
        newCoverValue: value
      });
    }
  },

  setNewDate(date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DATE_CHANGED,
      newDate: date
    });
    ApiUtils.requestAvailabilities(formatDateForApi(date));
  },

  decreasePanelNumber() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PANEL_NUMBER_DECREASED
    });
  },

  increasePanelNumber() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PANEL_NUMBER_INCREASED
    });
  },

  nameChanged(name) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.NAME_CHANGED,
      name: name
    });
  },

  phoneChanged(phone) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.PHONE_CHANGED,
      phone: phone
    });
  },

  emailChanged(email) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.EMAIL_CHANGED,
      email: email
    });
  },

  newsletterChanged() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.NEWSLETTER_CHANGED
    });
  },

  postBooking(state) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.BOOKING_POSTED
    });
    ApiUtils.postBooking(state);
  }
};
