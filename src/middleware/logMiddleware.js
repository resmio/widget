/* global ga:false */

const logMiddleware = ({ getState, dispatch }) => next => action => {
  ga('send', 'event', action.type)
  next(action)
  console.timeEnd(action.type)
}

export default logMiddleware
