const API_ROOT = 'https://app.resmio.com/v1/facility/'

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== 'API') {
    return next(action)
  }

  const { payload } = action

  fetch(`${API_ROOT}${payload.url}`)
    .then(response => response.json())
    .then(response => dispatch({ type: payload.success, response }))

}

export default apiMiddleware
