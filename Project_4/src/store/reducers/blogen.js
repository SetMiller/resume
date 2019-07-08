import * as actionTypes from '../actions/actionTypes'

const initState = {
    show: false
}

const showModalHandler= ( state, action) => {
  return {
    ...state,
    show: true
  }
}

const hideModalHandler= ( state, action) => {
  return {
    ...state,
    show: false
  }
}

const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:return showModalHandler( state, action )
    case actionTypes.HIDE_MODAL:return hideModalHandler( state, action )
    default: return state
  }
}
export default reducer