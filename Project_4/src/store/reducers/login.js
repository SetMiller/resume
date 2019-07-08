import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initState = {
    loginForm: {
      email: {
        elementType: 'input',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'password',
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
    },
    isSignin: false
}

const checkValidity = ( value, rules ) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    return isValid;
  }

const inputChangeHandler = ( state, action ) => {
  const updLoginFormElement = updateObject( state.loginForm[action.id], {
    value: action.value,
    valid: checkValidity(action.value, state.loginForm[action.id].validation)
  })
  const updLoginForm = updateObject( state.loginForm, {
    [action.id]: updLoginFormElement
  })
  return updateObject ( state, {loginForm: updLoginForm})
}

const isSigninHandler = ( state, action ) => {
  return updateObject(state, {isSignin: action.isSignin})
}

const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case actionTypes.LOGIN_INPUT_HANDLER:return inputChangeHandler( state, action )
    case actionTypes.IS_SIGNIN:return isSigninHandler( state, action )
    default: return state
  }
}
export default reducer