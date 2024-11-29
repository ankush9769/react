import React from 'react'
import { memo } from 'react'

const Navbar = (props) => {
    console.log("setting the adjective .........")
  return (
    <div>
      i am Navbar ...{props.adjective}<br />
      <button onClick={props.getadjective}>Change Adjective</button>
    </div>
  )
}

export default memo(Navbar)  //memo is basicaly use to render only render once even when it dont get change
