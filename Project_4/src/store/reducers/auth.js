import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initState = {
    isAuth: false,
    authLoading: false,
    error: null,
    token: null,
    userId: null,
    time: null,
}



const authStartHandler = ( state, action ) => {
  return updateObject(state, { 
    authLoading: true,
    error: null, 
    isAuth: false,
    })
}

const authSuccessHandler = ( state, action ) => {
  // console.log('authSuccess', action)
  return updateObject(state, { 
    authLoading: false,
    token: action.idToken,
    userId: action.userId,
    error: null,
    isAuth: true,
  })
}

const authFailHandler = ( state, action ) => {
  return updateObject(state, { 
    isAuth: false,
    authLoading: false,
    error: action.error.response.data.error.message
  })
}

const authLogout = ( state, action ) => {
  return updateObject(state, {
    token: null,
    userId: null,
    isAuth: false,
  })
}

const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case actionTypes.AUTH_START:return authStartHandler( state, action )
    case actionTypes.AUTH_SUCCESS:return authSuccessHandler( state, action )
    case actionTypes.AUTH_FAIL:return authFailHandler( state, action )
    case actionTypes.AUTH_LOGOUT:return authLogout( state, action )
    default: return state
  }
}
export default reducer