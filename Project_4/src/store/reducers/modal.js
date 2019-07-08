import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initState = {
    modalForm: {
      title: {
        elementType: 'input',
        value: '',
      },
      subtitle: {
        elementType: 'input',
        value: '',
      },
      text: {
        elementType: 'textarea',
        value: '',
      }
    },
    loading: false
}

const inputChangeHandler= ( state, action ) => {
  const updModalFormElement = updateObject( state.modalForm[action.id], {
    value: action.value
  })
  const updModalForm = updateObject( state.modalForm, {
    [action.id]: updModalFormElement
  })
  return updateObject ( state, {modalForm: updModalForm})
}

const postServerRequestStart = ( state, action ) => {
  return updateObject ( state, {loading: true})
}
const postServerRequestSuccess = ( state, action ) => {
  return updateObject ( state, {loading: false})
}
const postServerRequestFail = ( state, action ) => {
  return updateObject ( state, {loading: false})
}

const cardsUpdateStopHandler = ( state, action ) => {
  return updateObject ( state, {loading: false})
}

const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case actionTypes.CARDS_UPDATE_STOP:return cardsUpdateStopHandler( state, action )
    case actionTypes.CARD_INPUT_HANDLER:return inputChangeHandler( state, action )
    case actionTypes.POST_SERVER_START:return postServerRequestStart( state, action )
    case actionTypes.POST_SERVER_SUCCESS:return postServerRequestSuccess( state, action )
    case actionTypes.POST_SERVER_FAIL:return postServerRequestFail( state, action )
    default: return state
  }
}
export default reducer