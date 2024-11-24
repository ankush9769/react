import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)          //this will handle color

  useEffect(() => {       //this is also known as hook                //this will run when the page will load
    alert("hello this is useEffect , i will run on every render")
  })

  useEffect(() => {                      //this will run when the count will change
    alert("count was changed")
    setColor(color+1)                   //here we are changing the color
  }, [count])
  
  return (
    <>
    <Navbar colors={"blue"+color}/>
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
        <button onClick={() => setCount((count) => count + 1)}>
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
