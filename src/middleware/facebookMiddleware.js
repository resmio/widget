const facebookMiddleware = ({ getState, dispatch }) => next => action => {

  // This only cares for FACEBOOK type actions
  if (action.type !== 'FACEBOOK') { return next(action) }
  const { payload } = action

  const handleError = (
    response => console.log(response)
    // response => dispatch({ type: payload.error, response })
  )

  // This allows us to show spinners
  dispatch({ type: payload.pending })

  fetch('//connect.facebook.net/en_US/sdk.js')
    .then(response => {
      if (response.status >= 300) {
        handleError(response)
      } else {
        dispatch({type: payload.success})
      }
    })
    .catch(handleError)
}

export default facebookMiddleware
