import * as actionTypes from './actionTypes'
import axios from '../../axios-path'
import { CancelToken } from 'axios'

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
    // const source = CancelToken.source();
    // axios.get('/cards.json', {
    //   cancelToken: source.token
    // })
    axios.get('/cards.json?auth=' + token)
      .then(resp => {
        const fetchCards = []
        for ( let key in resp.data) {
          fetchCards.push({
            config: resp.data[key],
            id: key
          })
        }
        console.log('cardsResp')
        dispatch(fetchCardsSuccess( fetchCards ))
      })
      .catch(err => dispatch(fetchCardsFail( err )))
  }
}