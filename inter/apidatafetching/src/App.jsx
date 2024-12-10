import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setdate] = useState([])

  console.log(data)
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")           //first way to fetch data
    //   .then(response => response.json())
    //   .then(data => setdate(data))
    //   .catch(err => console.log(err))
    axios.get('https://jsonplaceholder.typicode.com/posts')         //second way to fetch data
    .then(response =>{
      let dd=response.data
      setdate(dd)})
  }, [])

  return (
    <>
      <div>
        {data.map((item, index)=>(
          <div key={index}>
            {item.id}.......{item.title}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
