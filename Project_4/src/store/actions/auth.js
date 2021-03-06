import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = ( ) => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = ( idToken, userId, timeLeft ) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
    timeLeft: timeLeft,
  }
}

export const authFail = ( error ) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userId')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = ( expirationTime ) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 100);
  }
}

export const auth = ( email, password, isSignin ) => {
  return dispatch => {
    dispatch(authStart())
    let endPointURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='
    const apiKey = 'AIzaSyClfwmUY18Y2SzL9SrPeT1l3yxg5g6sj8Y'
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    if (isSignin) {
        endPointURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='
      }
    axios.post(`${endPointURL}${apiKey}`, authData)
      .then(response => {
        // console.log('response', response)
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
        // console.log('expirationDate', expirationDate.getTime())
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', response.data.localId)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn))
      })
      .catch(err => {
        // console.log('error', err)
        dispatch(authFail(err))
      })
  }
}



// Проверка наличия в localStorage данных для авторизации
export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token){
      dispatch(logout())
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (expirationDate <= new Date()) {
        dispatch(logout())
      } else {
        const userId = localStorage.getItem('userId')
        dispatch(authSuccess(token, userId))
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
      }
    }
  }
}