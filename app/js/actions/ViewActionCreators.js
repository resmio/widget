import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiUtil from '../utils/ApiUtils';

const ViewActionCreators = {

  loadAvailabilities(date) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_AVAILABILITIES
    });
    ApiUtil.loadAvailabilities(date);
  }

};

export default ViewActionCreators;
