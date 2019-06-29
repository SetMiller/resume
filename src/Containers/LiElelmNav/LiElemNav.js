import React, { useState } from 'react'
import NavLiElem from '../../Components/UI/NavLiElem/NavLiElem'

import * as actions from '../../store/actions/actionTypes'
import { connect } from 'react-redux'

const LiElemNav = (props) => {
  
  const liElemArr = []

  for(let key in props.liElemReducer) {
    liElemArr.push({
      name: key,
      config: props.liElemReducer[key]
    })
  }
  const liElemRender = liElemArr.map(elem => (
    <NavLiElem key={elem.name} {...elem.config} click={() => props.onActiveElementHandler(elem.name)}/>
  ))

  return (
    <React.Fragment>
      {liElemRender}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
   return {
      liElemReducer: state.sideBar.elements,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    onActiveElementHandler: ( elemName ) => dispatch({type: actions.LI_ELEM_NAV_ACTIVE, id: elemName}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiElemNav)
