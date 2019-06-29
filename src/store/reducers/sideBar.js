import * as actionTypes from '../actions/actionTypes'


const initState = {
    elements: {
      Home: {
        iconName: "home",
        active: true
      },
      About: {
        iconName: "about",
        active: false
      },
      Resume: {
        iconName: "resume",
        active: false
      },
      // Portfolio: {
      //   iconName: "portfolio",
      //   active: false
      // },
      // Contact: {
      //   iconName: "contact",
      //   active: false
      // },
    }
}

const activeElementHandler = ( state, action) => {
  const newActiveElem = {...state.elements}
  for ( let elem in newActiveElem) {
    newActiveElem[elem] = {...state.elements[elem]}
    if (newActiveElem[elem] === newActiveElem[action.id]){
      newActiveElem[elem].active = true
    } else {
      newActiveElem[elem].active = false
    }
  }
  return {
    ...state,
    elements: newActiveElem
  }
}

const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case actionTypes.LI_ELEM_NAV_ACTIVE:return activeElementHandler( state, action )
    default: return state
  }
}
export default reducer