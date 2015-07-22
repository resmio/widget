import {ActionTypes} from '../constants/Constants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiUtil from '../utils/ApiUtils';

const ViewActionCreators = {

  loadAvailabilities() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_AVAILABILITIES
    });
    ApiUtil.loadAvailabilities();
  }

};

export default ViewActionCreators;
