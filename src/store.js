import { createStore } from 'redux'
import reducer from './reducer'
import preloadedState from './preloadedState'

// const store = createStore(reducer, preloadedState)
const store = createStore(reducer, preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store
