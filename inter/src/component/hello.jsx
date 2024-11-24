import React from 'react'
import { useState,useEffect} from 'react'


export default function hello() {
  const [data1,setdata]=useState(0)   //second argument hold updated value
  const [data2,setdata2]=useState(0)   
  const change=()=>{
    // if(data1==="hello"){
    //   setdata("hey")
    // }
    // else{
    //   setdata("hello")
    // }
    setdata(data1+1)
  }

  useEffect(() => {
    console.log("first useEffect")
  },[data1])            //whithour dependency it will run on every render and with dependency it will run only when dependency change

  const change2=()=>{
    setdata2(data2+1)
  }
  useEffect(() => {
    console.log("second useEffect")
  }, [data2])
  
  
  return (
    <div>
        <h1>hello , this is ankush </h1>
        <h2>addition 10+20= {10+20}</h2>
        <h2>this is useState = {data1}</h2>
        <button onClick={change}>change</button>
        <button onClick={change2}>second change</button>
    </div>
  )
}
