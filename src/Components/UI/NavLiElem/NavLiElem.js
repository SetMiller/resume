import React, {} from 'react'
import './NavLiElem.css'
import { faHome, faAddressCard, faBook, faComments, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const NavLiElem = (props) => {
  console.log('props', props)
  
  
  let icon = null
  switch (props.iconName) {
    case 'home':
      icon = <FontAwesomeIcon icon={faHome} />
      break
    case 'about':
      icon = <FontAwesomeIcon icon={faAddressCard} />
      break
    case 'resume':
      icon = <FontAwesomeIcon icon={faBook} />
      break
    case 'portfolio':
      icon = <FontAwesomeIcon icon={faDesktop} />
      break
    case 'contact':
      icon = <FontAwesomeIcon icon={faComments} />
      break
    default:
      icon = null
      break
  }
  // console.log('icon', icon)

  return (
    <React.Fragment >
      <li className={props.active ? "active" : null} onClick={props.click}>
        <a href="#">
          {icon}
          {/* <i className={props.iconName}></i> */}
          {/* <FontAwesomeIcon icon={} /> */}
        </a>
      </li>
    </React.Fragment>
  )
}

export default React.memo( NavLiElem, (prevProps, nextProps) => 
        nextProps.active === prevProps.active)


// React.memo(
//       Modal, 
//       (prevProps, nextProps) => 
//         nextProps.show === prevProps.show && 
//         nextProps.children === prevProps.children
//     )