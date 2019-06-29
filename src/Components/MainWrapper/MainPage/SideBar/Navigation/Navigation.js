import React, { useState } from 'react'
import NavLiElem from '../../../../UI/NavLiElem/NavLiElem'
import './Navigation.css'

const Navigation = (props) => {

  const [liElem, setLiElem] = useState({
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
    Portfolio: {
      iconName: "portfolio",
      active: false
    },
    Contact: {
      iconName: "contact",
      active: false
    },
  })

  const activeIconHandler = ( id ) => {   
    const newActiveElem = {...liElem}
    for ( let elem in newActiveElem) {
      newActiveElem[elem] = {...liElem[elem]}
      if (newActiveElem[elem] == newActiveElem[id]){
        newActiveElem[elem].active = true
      } else {
        newActiveElem[elem].active = false
      }
    }
    setLiElem (newActiveElem)
  }

  const liElemArr = []

  for(let key in liElem) {
    liElemArr.push({
      name: key,
      config: liElem[key]
    })
  }
  const liElemRender = liElemArr.map(elem => (
    <NavLiElem key={elem.name} {...elem.config} click={() => activeIconHandler(elem.name)}/>
  ))

  // let liElem = [...Array(10)].map((v, i) => (
    // <LiElem key={i}/>
  // ))

  return (
    <nav>
      <ul className="navbar">
        {liElemRender }
      </ul>
    </nav>
  )
}

export default Navigation


