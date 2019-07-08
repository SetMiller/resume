import * as actionTypes from './actionTypes'

// syncFunc
export const inputLoginHandler = ( e ) => {
  return {
    type: actionTypes.LOGIN_INPUT_HANDLER,
    value: e.target.value,
    id: e.target.dataset.id,
  }
}


export const isSignin = ( e ) => {
  return {
    type: actionTypes.IS_SIGNIN,
    isSignin: e.target.checked
  }
}
