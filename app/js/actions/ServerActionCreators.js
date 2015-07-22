import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';

const ServerActionCreators = {

  loadedAvailabilities(availabilities) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.AVAILABILITES_LOADED,
      availabilities: availabilities
    });
  }

};

export default ServerActionCreators;
