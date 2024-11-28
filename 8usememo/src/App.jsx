import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_,i)=>{     //   _ it stand for we skip the value of the array 
  return{
    index:i,
    isMagical:i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [Number,setNumber]= useState(nums)



  // const magical=Number.find(item=>item.isMagical===true)     //very expensive and complex computation
  //when we use this treditional method it will be very slow and it will be very expensive when we click to the button for re rendering
  
  const magical = useMemo(() => Number.find(item=>item.isMagical===true), [Number])   //now we use this statement to memoize(store the value) the value of magical
  //    [count] it means recalculation will be done when the Number changes

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h4>the value of magical is {magical.index}</h4>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{
          setCount((count) => count + 1)
          if(count==10){
            setNumber(new Array(10_000_000).fill(0).map((_,i)=>{     //   _ it stand for we skip the value of the array 
              return{
                index:i,
                isMagical:i===9_000_000
              }
            }))
          }
          } }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
