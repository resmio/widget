import { createStore } from 'redux'
import reducer from './reducer'
import moment from 'moment'
import availabilities from './data/availabilities'

const preloadedState = {
  facility: 'Meson Baturro',
  defaultWidth: '330px',
  defaultHeight: '500px',
  renderAtMaxSize: false,
  currentPanel: 1,
  calendarFocused: false,
  headerColor: '#53628C',
  headerTextColor: 'white',
  buttonColor: '#3E4862',
  guestSelectorCollapsed: true,
  maxGuests: 6,
  minGuests: 1,
  numberOfPanels: 3,
  selectedGuests: 1,
  headerImage: 'https://zenezake.files.wordpress.com/2015/07/img_6715.jpg',
  selectedDate: moment(),
  availabilities: availabilities
}

// const store = createStore(reducer, initialState)
const store = createStore(reducer, preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store
