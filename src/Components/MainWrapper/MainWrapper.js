import React from 'react'
import classes from './MainWrapper.module.sass'
import MainPage from './MainPage/MainPage'

const MainWrapper = (props) => {
  return (
    <div className={props.show ? classes.MainWrapper : classes.Hide}>
      <MainPage />
    </div>
  )
}

export default MainWrapper
