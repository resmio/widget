import {combineReducers} from 'redux';
import {intlReducer} from 'react-intl-redux';

import widgetReducer from './widget';

const reducers = {
  intl: intlReducer,
  widget: widgetReducer
}

export default combineReducers(reducers);
