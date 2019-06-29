import * as actionTypes from './actionTypes'

// syncFunc
export const activeElementHandler = ( id ) => {
  return {
    type: actionTypes.LI_ELEM_NAV_ACTIVE,
    id: id,
  }
}