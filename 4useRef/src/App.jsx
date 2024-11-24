import { useRef, useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const btnRef = useRef()      //this is useRef whitch use to store the value of the variable and this value will not be changed by the state change

  useEffect(() => {
    console.log("rerenderring ")
    btnRef.current.style.backgroundColor="red"         //when the page will rerender then color of the button will change to red
  })
  

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
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>             {/*here without using dom manipulate the document*/}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnRef.current.style.display="none"}}>hide count button</button>   {/* hidding the button ...another usecase */} 
    </>
  )
}

export default App
