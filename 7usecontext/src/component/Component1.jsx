import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>
      <button onClick={()=>{counter.setCount(counter.count + 1)}}>component {counter.count}</button>
    </div>
  )
}

export default Component1
