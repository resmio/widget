import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import preloadedState from './preloadedState'
import log from './middleware/logMiddleware'
import api from './middleware/apiMiddleware'
import thunk from 'redux-thunk'
import {addLocaleData} from 'react-intl';
import moment from 'moment'

import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import da from 'react-intl/locale-data/da';
import localeEnData from './locales/en.json';
import localeDeData from './locales/de.json';
import localeDaData from './locales/da.json';
addLocaleData([...en, ...de, ...da]);

let messages;
const language =
(navigator.languages && navigator.languages[0]) || navigator.language;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

moment.locale(languageWithoutRegionCode)

if (languageWithoutRegionCode === 'de') {
  messages = localeDeData;
} else if (languageWithoutRegionCode === 'da') {
  messages = localeDaData;
} else {
  messages = localeEnData;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  Object.assign({}, preloadedState, {intl: {messages: messages, locale: languageWithoutRegionCode}}),
  composeEnhancers(
    applyMiddleware(log, thunk, api)
  )
)
export default store
