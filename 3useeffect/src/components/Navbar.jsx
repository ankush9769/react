import React from 'react'
import { useEffect } from 'react'

const Navbar = ({colors}) => {
    useEffect(() => {
        alert("color was changed")                  //this will run when the colors will change
    }, [colors])

    useEffect(() => {
      alert("this is return alert")
      return () => {
        alert("the component is unmounted or remove")
      }
    })
    
    
  return (
    <div>
        <h3>i am a navbar of {colors} colour</h3> 
    </div>
  )
}

export default Navbar

