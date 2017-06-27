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
import sv from 'react-intl/locale-data/sv';
import nl from 'react-intl/locale-data/nl';
import fi from 'react-intl/locale-data/fi';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';
import lt from 'react-intl/locale-data/lt';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';
import tr from 'react-intl/locale-data/tr';
import localeEnData from './locales/en.json';
import localeDeData from './locales/de.json';
import localeDaData from './locales/da.json';
import localeSVData from './locales/sv.json';
import localeNLData from './locales/nl.json';
import localeFIData from './locales/fi.json';
import localeFRData from './locales/fr.json';
import localeLTData from './locales/lt.json';
import localePLData from './locales/pl.json';
import localePTData from './locales/pt.json';
import localeRUData from './locales/ru.json';
import localeESData from './locales/es.json';
import localeTRData from './locales/tr.json';
addLocaleData([...en, ...de, ...da, ...sv, ...nl, ...fi, ...fr, ...it, ...lt, ...pl, ...pt, ...ru, ...es, ...tr]);

let messages;
const language =
(navigator.languages && navigator.languages[0]) || navigator.language;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

moment.locale(language)

if (languageWithoutRegionCode === 'de') {
  messages = localeDeData;
} else if (languageWithoutRegionCode === 'da') {
  messages = localeDaData;
} else if (languageWithoutRegionCode === 'sv') {
  messages = localeSVData;
} else if (languageWithoutRegionCode === 'nl') {
  messages = localeNLData;
} else if (languageWithoutRegionCode === 'fi') {
  messages = localeFIData;
} else if (languageWithoutRegionCode === 'fr') {
  messages = localeFRData;
} else if (languageWithoutRegionCode === 'lt') {
  messages = localeLTData;
} else if (languageWithoutRegionCode === 'pl') {
  messages = localePLData;
} else if (languageWithoutRegionCode === 'pt') {
  messages = localePTData;
} else if (languageWithoutRegionCode === 'ru') {
  messages = localeRUData;
} else if (languageWithoutRegionCode === 'es') {
  messages = localeESData;
} else if (languageWithoutRegionCode === 'tr') {
  messages = localeTRData;
} else {
  messages = localeEnData;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = (facilityId) => {
  return createStore(
    reducer,
    Object.assign({}, preloadedState(facilityId), {intl: {messages: messages, locale: languageWithoutRegionCode}}),
    composeEnhancers(
      applyMiddleware(log, thunk, api)
    )
  )
}
export default store
