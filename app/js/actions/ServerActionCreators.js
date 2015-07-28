import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  // Actions that come from the server
  // They can be fired from other actions and fire other actions.

  availabilitiesLoaded(availabilities) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.AVAILABILITES_LOADED,
      availabilities: availabilities
    });
  }

};
