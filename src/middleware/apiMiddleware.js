const API_ROOT = `https://app.resmio.com/v1/facility/`

const apiMiddleware = ({ getState, dispatch }) => next => action => {

  // This only cares for API type actions, so shortcircuiting here if not
  if (action.type !== 'API') { return next(action) }

  const { payload } = action

  const options = {
    // default to get unless something is specified
    method: payload.method || 'get'
  }

  // the 'magic' for the body of the request
  if (payload.body) { options.body = JSON.stringify(payload.body(getState())) }

  // let's build the url to be used as an endpoint
  const facility = getState().widget.facility
  const url = `${API_ROOT}${facility}${payload.url}`

  const handleError = ( response => dispatch({ type: payload.error, response }))

  // This allows us to show spinners
  dispatch({ type: payload.pending })

  fetch(url, options)
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
