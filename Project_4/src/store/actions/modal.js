import * as actionTypes from './actionTypes'
import axios from '../../axios-path'

// syncFunc
export const inputCardHandler = ( e ) => {
  return {
    type: actionTypes.CARD_INPUT_HANDLER,
    value: e.target.value,
    id: e.target.dataset.id,
  }
}

export const cardsUpdateStopHandler = () => {
  return {
    type: actionTypes.CARDS_UPDATE_STOP
  }
}

export const postServerRequestStart = () => {
  return {
    type: actionTypes.POST_SERVER_START
  }
}

// FIXME:
// после отправки заказа данные никуда не идут
export const postServerRequestSuccess = ( id, cardData ) => {
  return {
    type: actionTypes.POST_SERVER_SUCCESS,
  }
}

export const postServerRequestFail = ( error ) => {
  return {
    type: actionTypes.POST_SERVER_FAIL,
    error: error,
  }
}

// asyncFunc
export const postServerRequestHandler = ( cardData, token ) => {
  return dispatch => {
    dispatch(postServerRequestStart())
    axios.post('/cards.json?auth=' + token, cardData)
        .then(resp => {
          dispatch(postServerRequestSuccess( resp.data.name, cardData ))
        })
        .catch(err => dispatch(postServerRequestFail( err )))
  }
}