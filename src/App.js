import React, { useState, useEffect } from 'react';
import './App.css';
import Background from './Components/UI/Background/Background'
import Greeting from './Components/UI/Greeting/Greeting'
import MainWrapper from './Components/MainWrapper/MainWrapper'

const App = props => {

  const timeDelay = 1000
  const [showGreet, setShowGreet] = useState(true)
  const [greetTimeDelay] = useState(timeDelay * 8) // 7
  const [showBG, setShowBG] = useState(false)
  const [bgTimeDelay] = useState(timeDelay * 7.8) // 7.8
  const [showMW, setShowMW] = useState(false)
  const [mWTimeDelay] = useState(timeDelay * 1) // 8.6
  
  // #FIXME 

  useEffect(() => {
    delay(setShowGreet, !showGreet, greetTimeDelay)
    delay(setShowBG, !showBG, bgTimeDelay)
    delay(setShowMW, !showMW, mWTimeDelay)
  }, [])

  const delay = (metod, val, timeDelay) => {
    setTimeout(() => {
      metod(val)
    }, timeDelay);
  }

  return (

    <div className="App">
      {/* {!showBG ? <Greeting show={showGreet}/> : null} */}
      {/* <Background show={showBG}/> */}
      <MainWrapper show={showMW}/>
    </div>
  )
}

export default App;
