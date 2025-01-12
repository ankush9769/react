import { useState } from 'react'
import './App.css'

function App() {
  const [task, settask] = useState("")
  const [list, setlist] = useState([])
  const [editindex, seteditindex] = useState(null)

  const addtask = () => {
    if (editindex !== null) {
      const updatedlist = list.map((val, ind) => {
        if (ind === editindex) {
          return { ...val, tasks: task }
        }
        return val
      })
      setlist(updatedlist)
      seteditindex(null)
    } else {
      setlist([...list, { tasks: task, iscompleted: false }])
      // console.log(list)
    }
    settask("")
  }

  

  const changehandle = (e) => {
    settask(e.target.value)

  }
  const deletehandle = (index) => {          //delete task
    setlist(list.filter((val, ind) => ind !== index))
  }

  const edithandle = (index) => {       
    settask(list[index].tasks)
    seteditindex(index)
  }

  const completedhandle=(index)=>{
    const completedlist=list.map((val,ind)=>{
      if(ind===index){
        return{...val ,iscompleted:true}
      }
      return val
    })
    setlist(completedlist)
  }

  return (
    <>
      <div className="main">
        <div className="todo">
          <h1>Add your tasks here</h1>
          <div className="add">
            <input className='input' onChange={changehandle} value={task} type="text" placeholder="Enter a task" />
            <button onClick={addtask}>Add</button>
          </div>
          <div className="checkbox">
            <input type="checkbox" /><label htmlFor="">show completed tasks</label>
          </div>
          <h3>your task</h3>
          <div className="todolist">
            {list.map((item, index) => (
              <div className="list" key={index}>

                <p>{item.tasks}</p>
                <div className="button">
                  <button className='edit' onClick={() => edithandle(index)}>edit</button>
                  <button className='completed' onClick={() => completedhandle(index)}>completed</button>
                  <button className='delete' onClick={() => deletehandle(index)}>delete</button>
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
