import { combineReducers } from 'redux'
import booking from './bookingReducer'
import custom from './customReducer'
import ui from './uiReducer'

const rootReducer = combineReducers({
  booking,
  custom,
  ui
})

export default rootReducer
