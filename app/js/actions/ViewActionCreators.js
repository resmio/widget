import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiUtils from '../utils/ApiUtils';

export default {

  // Actions which originate on the view, they can fire other actions
  // originating in the server for example
  requestAvailabilities(date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.AVAILABILITIES_REQUESTED
    });
    ApiUtils.requestAvailabilities(date);
  },

  changeNumberOfCovers(value) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.NUMBER_OF_COVERS_CHANGED,
      newCoverValue: value
    });
  }

};
