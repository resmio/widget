import { createStore } from 'redux'
import reducer from './reducer'
import moment from 'moment'

const initialState = {
  facility: 'Meson Baturro',
  currentPanel: 1,
  selectedGuests: 1,
  selectedDate: moment(new Date())
}

const store = createStore(reducer, initialState)
export default store
