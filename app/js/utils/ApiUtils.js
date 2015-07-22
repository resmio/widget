import WidgetActions from '../actions/WidgetActions';
import ServerActionCreators from '../actions/ServerActionCreators';
import {API} from '../constants/Constants';

import xhr from '../lib/xhr';

const ApiUtils = {
  // Load mock product data from localStorage into ProductStore via Action

  loadAvailabilities(date) {
    xhr.getJSON(`${API}/facility/the-fish/availability?date__gte=${date}`, (err, res) => {
      if (err) {
        return err;
      }
      ServerActionCreators.loadedAvailabilities(res.objects);
    });
  },

  getAvailabilities() {
    const data = JSON.parse(localStorage.getItem('availabilities'));
    WidgetActions.getAvailabilities(data);
  }

};

export default ApiUtils;
