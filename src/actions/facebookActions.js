/* global FB */

export const FACEBOOK = 'FACEBOOK'
export const FACEBOOK_SDK_FETCHING = 'FACEBOOK_SDK:FETCHING'
export const FACEBOOK_SDK_FETCHING_SUCCESS = 'FACEBOOK_SDK:FETCHING:SUCCESS'
export const FACEBOOK_SDK_FETCHING_ERROR = 'FACEBOOK_SDK:FETCHING:ERROR'

export function loadFacebookSdk () {
  window.fbAsyncInit = function() {
    FB.init({
      appId: '651091721744941',
      xfbml: true,
      version: 'v2.8'
    })
  }
  return  (dispatch, getState) => {
    dispatch({
      type: FACEBOOK,
      payload: {
        pending: FACEBOOK_SDK_FETCHING,
        success: FACEBOOK_SDK_FETCHING_SUCCESS,
        error: FACEBOOK_SDK_FETCHING_ERROR
      }
    })
  }
}
