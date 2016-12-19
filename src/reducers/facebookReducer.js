import {
  FACEBOOK_SDK_FETCHING_SUCCESS
} from '../actions/facebookActions'

function facebook (state = {}, action) {

  switch (action.type) {

    case FACEBOOK_SDK_FETCHING_SUCCESS:
     debugger
      return Object.assign({}, state, {
        loaded: true
      })

    default:
      return state
    }
}

export default facebook
