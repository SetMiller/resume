import React from 'react'
import LiElem from './LiElem/LiElem'
import classes from './Background.module.sass'

const Background = props => {

    let liElem = [...Array(10)].map((v, i) => (
      <LiElem key={i}/>
    ))

    return (
      <div className={props.show ? classes.Background : classes.Hide}>
        <ul className={props.show ? classes.BgBubbles : classes.Hide}>
          {liElem}
        </ul>
      </div>
    )
}

export default Background
