import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initState = {
    cards: [],
    loading: false
}

const fetchCardsStart = ( state, action ) => {
  return updateObject( state, {loading: true})
}

const fetchCardsSuccess = ( state, action ) => {
  return updateObject( state, {cards: action.cards, loading: false})
}

const fetchCardsFail = ( state, action ) => {
  return updateObject( state, {loading: false})
}

const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case actionTypes.FETCH_CARDS_START:return fetchCardsStart( state, action )
    case actionTypes.FETCH_CARDS_SUCCESS:return fetchCardsSuccess( state, action )
    case actionTypes.FETCH_CARDS_FAIL:return fetchCardsFail( state, action )
    default: return state
  }
}
export default reducer