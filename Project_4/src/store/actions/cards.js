import * as actionTypes from './actionTypes'
import axios from '../../axios-path'

// syncFunc
export const fetchCardsStart = () => {
  return {
    type: actionTypes.FETCH_CARDS_START
  }
}

// после отправки заказа данные никуда не идут
export const fetchCardsSuccess = ( cards ) => {
  return {
    type: actionTypes.FETCH_CARDS_SUCCESS,
    cards: cards,
    // cardData: cardData
  }
}

export const fetchCardsFail = ( error ) => {
  return {
    type: actionTypes.FETCH_CARDS_FAIL,
    error: error,
  }
}

// asyncFunc
export const fetchCardsHandler = ( token ) => {
  return dispatch => {
    dispatch(fetchCardsStart())
    axios.get('/cards.json?auth=' + token)
      .then(resp => {
        const fetchCards = []
        for ( let key in resp.data) {
          fetchCards.push({
            config: resp.data[key],
            id: key
          })
        }
        dispatch(fetchCardsSuccess( fetchCards ))
      })
      .catch(err => dispatch(fetchCardsFail( err )))
  }
}