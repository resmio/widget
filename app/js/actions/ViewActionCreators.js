import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiUtil from '../utils/ApiUtils';

const ViewActionCreators = {

  // Actions which originate on the view, they can fire other actions
  // originating in the server for example
  requestAvailabilities(date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.AVAILABILITIES_REQUESTED
    });
    ApiUtil.requestAvailabilities(date);
  }

};

export default ViewActionCreators;
