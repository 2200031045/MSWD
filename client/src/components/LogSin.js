import React from 'react'
import './LogSin.css'
import { Link } from 'react-router-dom'
export default function LogSin() {
  return (
    <div>
        <div className='nav-container'>
    <div className='navigation'>
        <nav>
            <ul className='unlist'>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        </ul>
        </nav>
    </div>
    </div>
    </div>
  )
}
