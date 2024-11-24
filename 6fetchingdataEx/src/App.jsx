import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [datas, setdata] = useState([])

  const fetching = async () => {
    const a=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await a.json()
    setdata(data)
  }

  useEffect(() => {
    fetching()
  })
  
  return (
    <>
    <div>
    {datas.map(fetchdata=>{
      return <div key={fetchdata.id} className="maindata">
        <p>{fetchdata.id}...{fetchdata.title}</p>
      </div>
    })}
    </div>
    <div>
      <h1>end</h1>
    </div>
    </>  
  )
}

export default App
