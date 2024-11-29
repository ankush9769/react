import { useState,useReducer ,useEffect,useLayoutEffect} from 'react'
import './App.css'
import Hello from './component/hello'
import Newone from './component/newone'
import { useRef } from 'react'
import Test from './component/test'
import Condition from './component/conditional'


let initialState=0
const reducer=(state,action)=>{           //usereducer is basically use for state management eg=single state can be used for multiple works
  if(action.type==="inc"){
    return state+1
  }
  if(action.type==="dec"){
    return state-1
  }
  return state
}

function App() {
  let firstname="ankush"
  let lastname="pal"

  // useEffect(() => {
  //   console.log("heloo")
  
  //   // return () => {
  //   //   second
  //   // }
  // })            //whithour

   //variable
   const [count,setCount]=useState(0)
   let a =useRef(5);
   let inputs = useRef()
  

   const changevalue=()=>{
    a.current=a.current+1;
    console.log(a.current)

    setCount(count+1)

    inputs.current.style.width="50%"
    inputs.current.style.backgroundColor="green"
   }

   let variable="ankush"


  const [state, dispatch] = useReducer(reducer,initialState)


// useLayoutEffect
  const [states,setstates]=useState(0)
  const handle=()=>{
    setstates(states+1)
  }

  useEffect(() => {
    console.log("useEffect")
  }, [states])

  useLayoutEffect(() => {
    console.log("uselayoutEffect")
  }, [states])
  


  return (
    <>
    <Condition></Condition>
    <Hello></Hello>
    <Newone data="hello" name={firstname} lname={lastname}></Newone>
    <button onClick={changevalue}>click karo {count} </button><br />
    <input ref={inputs} type="text" />

    <Test name={variable} lname="pal"></Test>

    {/* usereducer */}
    {state}
    <button onClick={()=>{dispatch({type:"inc"})}} >inc</button>
    <button onClick={()=>{dispatch({type:"dec"})}} >dec</button><br />

    <button onClick={handle}>useeffct/uselayouteffect</button>
    </>
  )
}

export default App
