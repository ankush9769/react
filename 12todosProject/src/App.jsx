import { useState } from 'react'
import './App.css'

function App() {
  const [task, settask] = useState("")
  const [list, setlist] = useState([])

  const addtask = () => {
    setlist([...list, { tasks:task, iscompleted: false }])
    settask("")
    console.log(list)
  }

  const changehandle = (e) => {
    settask(e.target.value)

  }


  return (
    <>
      <div className="main">
        <div className="todo">
          <h1>Add your tasks here</h1>
          <div className="add">
            <input className='input' onChange={changehandle} type="text" placeholder="Enter a task" />
            <button onClick={addtask}>Add</button>
          </div>
          <div className="checkbox">
            <input type="checkbox" /><label htmlFor="">show completed tasks</label>
          </div>
          <h3>your task</h3>
          <div className="todolist">
            {list.map((item,index) => (
              <div className="list" key={index}>
                <p>{item.tasks}</p>
                <div className="button">
                  <button className='edit'>edit</button>
                  <button className='delete'>delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
