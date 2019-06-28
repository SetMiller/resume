import React from 'react'
import './MainPage.css'
import SideBar from './SideBar/SideBar'
import TabContent from './TabContent/TabContent'

const MainPage = () => {
  return (
    <div className="MainPage">
      <SideBar />
      <TabContent />
    </div>
  )
}

export default MainPage
