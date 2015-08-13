import ServerActionCreators from '../actions/ServerActionCreators';
import {API} from '../constants/Constants';

import xhr from '../lib/xhr';

const ApiUtils = {

  requestAvailabilities(date) {
    xhr.getJSON(`${API}/facility/the-fish/availability?date__gte=${date}`, (err, res) => {
      if (err) {
        return err;
      }
      ServerActionCreators.availabilitiesLoaded(res.objects);
    });
  },

  postBooking(state) {
    const req = {
      checksum: state.timeslot.checksum,
      comment: '',
      date: state.timeslot.date,
      email: state.email,
      facility_resources: [],
      fb_access_token: '',
      name: state.name,
      newsletter_subscribe: state.newsletter,
      num: state.covers,
      phone: state.phone,
      price_change: state.timeslot.price_change,
      source: 'widgetTest'
    };
    const url = 'https://app.resmio.com/v1/facility/the-fish/bookings';
    xhr.postJSON(url, req, (err, res) => {
      if (err) {
        return err;
      }
      return res;
    });
  }
};

export default ApiUtils;