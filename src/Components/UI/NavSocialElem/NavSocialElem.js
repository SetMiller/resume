import React, {} from 'react'
// import './NavLiElem.css'
import {  } from "@fortawesome/free-solid-svg-icons";
import { faSkype, faVk, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const NavSocialElem = (props) => {
  console.log('props', props)
  
  
  let icon = null
  let link = null
  switch (props.name) {
    case 'vk':
      icon = <FontAwesomeIcon icon={faVk} color={'#333'}/>
      link = props.link
      break
    case 'linkedIn':
      icon = <FontAwesomeIcon icon={faLinkedin} color={'#333'}/>
      link = props.link
      break
    case 'skype':
      icon = <FontAwesomeIcon icon={faSkype} color={'#333'}/>
      link = props.link
      break
    default:
      icon = null
      break
  }

  return (
    <React.Fragment >
        <a href={link}>
          {icon}
        </a>
    </React.Fragment>
  )
}

export default React.memo( NavSocialElem, (prevProps, nextProps) => 
        nextProps.active === prevProps.active)
