import { createStore } from 'redux'
import reducer from './reducer'
import moment from 'moment'

const initialState = {
  facility: 'Meson Baturro',
  currentPanel: 1,
  headerCollapsed: false,
  headerImage: 'https://zenezake.files.wordpress.com/2015/07/img_6715.jpg',
  selectedGuests: 1,
  selectedDate: moment(new Date())
}

const store = createStore(reducer, initialState)
export default store
