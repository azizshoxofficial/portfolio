import React, { useState } from 'react'
import "./Navbar.css"
import img1 from '../../assets/01.jpg'
import fl from '../../assets/fl.png'
import fotoshop from '../../assets/fotoshop.png'
import lightron from '../../assets/download.png'
import vs from '../../assets/vs.png'
import { NavLink } from "react-router-dom"
import {FaUserLock} from "react-icons/fa"


function Navbar() {
  const [data, setData] = useState(false)
  
  return (
    <div className='navbar'>
      <img src={img1} alt="" />
        <NavLink exact activeClassName='nav_active' className='nav_link' to="/">Home</NavLink>
        <NavLink exact activeClassName='nav_active' className='nav_link' to="/Contact">Contact</NavLink>
        <NavLink exact activeClassName='nav_active' className='nav_link' to="/About">About</NavLink>
        <NavLink to="/cart" className="nav_cart">
        </NavLink>
      <h2>I'm Web Developer  <FaUserLock/></h2>
        <div className="program">
          <h4>I'm know </h4>
        
        <div onc className="know">
      
        <img src={fl} alt="" />
         <img src={fotoshop} alt="" />
         <img src={lightron} alt="" />
         <img src={vs} alt="" />

        </div>
         
        </div>
      
    </div>
  )
}

export default Navbar