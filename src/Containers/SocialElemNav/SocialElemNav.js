import React,{ useState } from 'react'
import NavSocialElem from '../../Components/UI/NavSocialElem/NavSocialElem'
import './SocialElemNav.css'

const SocialElemNav = () => {
  const [socialElem] = useState({
    vk: 'https://vk.com/id328476486',
    linkedIn: 'https://linkedin.com/in/a74741182',
    skype: 'skype:solomko.r?userinfo',
  })

  const socialElemArr = []
  for (let elem in socialElem) {
    socialElemArr.push({
      name: elem,
      link: socialElem[elem]
    })
  }

  const socialElemRender = socialElemArr.map(elem => (
    <NavSocialElem key={elem.name} {...elem}/>
  ))

  return (
    <div className="social">
      {socialElemRender}
    </div>
  )
}

export default React.memo(SocialElemNav)
