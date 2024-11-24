import React from 'react'

export default function newone({name,lname}) {
  return (
    <div>
        {/* <h1>{props.data}</h1> */}        
        <h2>{name} {lname}</h2>       {/* thsi known as destructuring in react */}
    </div>
  )
}
