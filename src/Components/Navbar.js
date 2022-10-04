import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
       <nav className='navbar navbar-dark bg-dark'>
        <h6 className='navbar-brand'>MOVIE APP </h6>
        <Link to="./" className='navbar-brand'>Home</Link>
       </nav></div>
  )
}

export default Navbar