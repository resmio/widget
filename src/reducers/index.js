import { combineReducers } from 'redux'
import booking from './bookingReducer'
import custom from './customReducer'
import facebook from './facebookReducer'
import ui from './uiReducer'
import { IntlReducer as Intl } from 'react-redux-multilingual'

const rootReducer = combineReducers({
  booking,
  custom,
  facebook,
  Intl,
  ui
})

export default rootReducer
