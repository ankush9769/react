import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showbtn,setbtn]=useState(true)   // it is created for conditional rendering 
  console.log(showbtn)

  const Component = () => {               //you can also create the component within the app.jsx
    return <button>this button is created within app.jsx</button>
  }


  const [list,setlist]=useState([        //this is created for list rendering
    {
      id:1,
      name:"sachin"
    },
    {
      id:2,
      name:"virat"
    },
    {
      id:2,
      name:"surya"
    }
  ])


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
      {/* this is known as conditional rendering */}
      {/* {showbtn ? <button>it will be shown only when the the show button is true</button>:"nothing is there"} */}  {/*if else both*/}
      { showbtn && <button>it will be shown only when the the show button is true</button>}   {/*if showbtn is true then only button will be shown */}
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setbtn(!showbtn)}>
          show button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Component></Component>        {/* this component created within the app.jsx not in component folder*/}
      {list.map(item=>{            {/* this is used for rendering the list*/}
        return <div id="keys" key={item.id}>
          <h4>{item.id}....{item.name}</h4>
        </div>
      })}
    </>
  )
}

export default App
