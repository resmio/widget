import ServerActionCreators from '../actions/ServerActionCreators';
import {API} from '../constants/Constants';

import xhr from '../lib/xhr';

const ApiUtils = {
  // Load mock product data from localStorage into ProductStore via Action

  requestAvailabilities(date) {
    xhr.getJSON(`${API}/facility/the-fish/availability?date__gte=${date}`, (err, res) => {
      if (err) {
        return err;
      }

      ServerActionCreators.availabilitiesLoaded(res.objects);
    });
  }

};

export default ApiUtils;
