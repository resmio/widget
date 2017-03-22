/* global dataLayer:false */

const logMiddleware = ({ getState, dispatch }) => next => action => {
  window.dataLayer && action.analytics && dataLayer.push({...action.analytics, facility: getState().facility})
  next(action)
}

export default logMiddleware
