import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/Constants';

// Define actions object
const WidgetActions = {

  // Get inital availabilities data
  getAvailabilities(data) {
    AppDispatcher.handleServerAction({
      actionType: Constants.RECEIVE_DATA,
      data: data
    });
  },

  // Set currently selected timeslot
  selectTimeslot(index) {
    AppDispatcher.handleViewAction({
      actionType: Constants.SET_SELECTED,
      data: index
    });
  }

};

export default WidgetActions;
