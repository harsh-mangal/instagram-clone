import React from 'react'
import logo from "../img/logo.png" 
import  "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='navbar-menu'>
            <li>Sign up</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default Navbar