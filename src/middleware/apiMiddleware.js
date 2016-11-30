const API_ROOT = `https://app.resmio.com/v1/facility/`

const apiMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type !== 'API') {
    return next(action)
  }

  const { payload } = action
  const handleError = (response => dispatch({ type: payload.error, response }))

  const facility = getState().custom.facility

  fetch(`${API_ROOT}${facility}${payload.url}`)
    .then(response => {
      if (response.status >= 300) {
        handleError(response)
      } else {
        response.json()
        .then(response => dispatch({ type: payload.success, response }))
      }
    })
    .catch(handleError)

}

export default apiMiddleware
