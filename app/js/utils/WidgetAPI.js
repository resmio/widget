import WidgetActions from '../actions/WidgetActions';

const WidgetAPI = {
  // Load mock product data from localStorage into ProductStore via Action
  getAvailabilitiesData() {
    const data = JSON.parse(localStorage.getItem('availabilities'));
    WidgetActions.receiveAvailabilities(data);
  }

};

export default WidgetAPI;
