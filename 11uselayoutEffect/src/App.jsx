import { useState ,useLayoutEffect,useEffect} from 'react'
import './App.css'

function App() {
  const [state, setstate] = useState(0)
  const handle=()=>{
    setstate(state+1)
  }

  useEffect(() => {                         //it will run after dom is loaded
    console.log('useEffect called')
  }, [state])

  useLayoutEffect(() => {                   //it will run before dom is updated
    console.log("uselayoutEffect called")
  }, [state])
  
  
  return (
    <>
    <button>{state}</button><br />
    <button onClick={handle}>useEffect/uselayoutEffect</button>
    </>
  )
}

export default App
