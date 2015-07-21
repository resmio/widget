import WidgetActions from '../actions/WidgetActions';

const WidgetAPI = {
  // Load mock product data from localStorage into ProductStore via Action
  getAvailabilities() {
    const data = JSON.parse(localStorage.getItem('availabilities'));
    WidgetActions.getAvailabilities(data);
  }

};

export default WidgetAPI;
