import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div>
        <hr />
        <button><Link to="/">home</Link></button>
        <button><Link to="/about">about</Link></button>
      <h1>this is routers header</h1>
    </div>
  )
}

export default header
