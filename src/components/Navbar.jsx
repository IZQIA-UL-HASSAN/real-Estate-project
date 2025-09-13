import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='nav-list'>
            <ul>
              <li id='list'>Home</li>
              <li id='list'>contact</li>
              <li id='list'>about</li>
              
                
            </ul>
            <div className="auth-buttons">
          <Link to="/login"><button className='login-style'>Login</button></Link>
          <Link to="/signup"><button className='signup-style'>Signup</button ></Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar