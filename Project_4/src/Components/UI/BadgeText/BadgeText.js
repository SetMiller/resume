import React from 'react'

// Font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Bootstrap
import { Badge } from 'react-bootstrap'

const BadgeText = ( props ) => {
  return (
    <h5> 
      <Badge variant="secondary">
        <FontAwesomeIcon icon={faArrowRight}/> 
      </Badge>
      <span style={{marginLeft:'1.25rem', fontSize: '1.25rem'}}>{props.name}</span>
    </h5> 
  )
}

export default BadgeText
