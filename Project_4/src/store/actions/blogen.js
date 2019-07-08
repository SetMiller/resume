import * as actionTypes from './actionTypes'

// syncFunc
export const showModalHandler = ( ) => {
  return {
    type: actionTypes.SHOW_MODAL,
  }
}

export const hideModalHandler = ( ) => {
  return {
    type: actionTypes.HIDE_MODAL,
  }
}