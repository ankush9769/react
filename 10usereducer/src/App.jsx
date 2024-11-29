import { act, useReducer, useState } from 'react'
import './App.css'

let initialstate=0;
const reducer=(state,action)=>{
  if(action.type==="inc"){
    return state+1;
  }
  if(action.type==="dec"){
    return state-1;
  }
  return state
}


function App() {

  const[state,dispatch]=useReducer(reducer,initialstate)


  return (
    <>
    {state}
    <button onClick={()=>{dispatch({type:"inc"})}}>inc</button>
    <button onClick={()=>{dispatch({type:"dec"})}}>dec</button>
    </>
  )
}

export default App
