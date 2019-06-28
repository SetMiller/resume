import React from 'react'
import Typing from 'react-typing-animation'
import classes from './Greeting.module.sass';

const Greeting = props => {
    // console.log('props', props)
    const cssClasses = [classes.Greeting, props.show 
      ? classes.Open 
      : classes.Hide].join(' ')
    return (
      <div className={cssClasses}>  
        <div>
          <Typing speed={50}>
            <div>
              <Typing.Delay ms={1500}/>
              Welcome to my Portfolio 👻
              <Typing.Delay ms={500} />
              <Typing.Backspace count={26} speed={20}/>
              <Typing.Delay ms={300} />
              <Typing.Speed ms={50} />
              Enjoy 💩
              <Typing.Delay ms={500} />
              <Typing.Backspace count={26} speed={20}/>
            </div>
          </Typing>
        </div>
        
      </div>
    )
}
export default Greeting