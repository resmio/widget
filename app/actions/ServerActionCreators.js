import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  // Actions that come from the server
  // They can be fired from other actions and fire other actions.

  availabilitiesLoaded(availabilities) {
    console.log('availabilitiesLoaded', availabilities);
    AppDispatcher.handleServerAction({
      type: ActionTypes.AVAILABILITIES_LOADED,
      availabilities: availabilities
    });
  },

  facilityInfoLoaded(facilityName) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.FACILITY_INFO_LOADED,
      facilityName: facilityName
    });
  }

};
