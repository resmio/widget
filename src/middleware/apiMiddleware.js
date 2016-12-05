const API_ROOT = `https://app.resmio.com/v1/facility/`

const apiMiddleware = ({ getState, dispatch }) => next => action => {

  // This only cares for API type actions
  if (action.type !== 'API') {
    return next(action)
  }

  const { payload } = action

  // default to get unless something is specified
  const method = payload.method || 'get'
  // the 'magic' for the body of the request
  const body = JSON.stringify(payload.body(getState())) || ''

  // let's build the url to be used as an endpoint
  const facility = getState().custom.facility
  const url = `${API_ROOT}${facility}${payload.url}`


  const handleError = (
    response => dispatch({ type: payload.error, response })
  )

  fetch(url, {
    method: method,
    body: body
  })
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
