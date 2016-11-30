import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import preloadedState from './preloadedState'
import log from './middleware/logMiddleware'
import api from './middleware/apiMiddleware'

// const store = createStore(reducer, preloadedState)
const store = createStore(reducer, preloadedState,
    applyMiddleware(log, api),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store
