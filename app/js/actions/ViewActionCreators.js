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
    console.log('Action.setNewDate');
    ApiUtils.requestAvailabilities(formatDateForApi(date));
  }

};
