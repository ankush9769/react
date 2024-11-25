import { useState } from 'react'
import './App.css'
import Hello from './component/hello'
import Newone from './component/newone'
import { useRef } from 'react'
import Test from './component/test'
import Condition from './component/conditional'




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


  return (
    <>
    <Condition></Condition>
    <Hello></Hello>
    <Newone data="hello" name={firstname} lname={lastname}></Newone>
    <button onClick={changevalue}>click karo {count} </button><br />
    <input ref={inputs} type="text" />

    <Test name={variable} lname="pal"></Test>

    </>
  )
}

export default App
