import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        {/* <Link to='/'>Home</Link> */}
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
    </nav>
  )
}

export default NavBar