import AppDispatcher from '../dispatchers/AppDispatcher';
import WidgetConstants from '../constants/WidgetConstants';

// Define actions object
const WidgetActions = {

  // Get inital availabilities data
  getAvailabilities(data) {
    debugger;
    AppDispatcher.handleAction({
      actionType: WidgetConstants.RECEIVE_DATA,
      data: data
    });
  },

  // Set currently selected timeslot
  selectTimeslot(index) {
    AppDispatcher.handleAction({
      actionType: WidgetConstants.SET_SELECTED,
      data: index
    });
  }

};

export default WidgetActions;
