import React from 'react'
import LiElemNav from '../../../../../Containers/LiElelmNav/LiElemNav'
import SocialElemNav from '../../../../../Containers/SocialElemNav/SocialElemNav'

const Navigation = (props) => {

  return (
    <nav>
      <ul className="navbar">
        <LiElemNav />
      </ul>
      <SocialElemNav />
    </nav>
  )
}

export default Navigation


