import React from 'react'

const Social = () => {
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

export default Social
