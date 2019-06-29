import React from 'react'
import './TabContent.css'
import HomeContent from './HomeContent/HomeContent'
import AboutContent from './AboutContent/AboutContent'
import ResumeContent from './ResumeContent/ResumeContent'
import {TransitionGroup} from 'react-transition-group'

import { connect } from 'react-redux'

const TabContent = (props) => {
  console.log('props', props.liElemReducer)

  let active = null
  // let activeElem = []
  for (let elem in props.liElemReducer) {
    if (props.liElemReducer[elem].active) {
      active = elem
    }
    // activeElem.push(props.liElemReducer[elem].active)
  }
  
  // console.log('activeElem', activeElem)
  let contentToRender = null
  switch (active) {
    case 'Home':
      contentToRender = <HomeContent />
      break
    case 'About':
      contentToRender = <AboutContent />
      break
    case 'Resume':
      contentToRender = <ResumeContent />
      break
    case 'Portfolio':
      contentToRender = <span>789</span>
      break
    case 'Contact':
      contentToRender = <span>333</span>
      break
    default:
      contentToRender = <span>Something went wrong =)</span>
      break
  }

  return (
    <div className="TabContent">
      {contentToRender}
      {/* <TransitionGroup className="todo-list"> */}
        {/* <HomeContent show={activeElem[0]}/>
        <AboutContent show={activeElem[1]}/>
        <ResumeContent show={activeElem[2]}/> */}
      {/* </TransitionGroup> */}
     
    </div>
  )
}

const mapStateToProps = state => {
   return {
      liElemReducer: state.sideBar.elements
   }
}


export default connect(mapStateToProps)(TabContent)
