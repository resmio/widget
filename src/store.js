import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import preloadedState from './preloadedState'
import log from './middleware/logMiddleware'
import api from './middleware/apiMiddleware'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(log, thunk, api)
  )
)
export default store
