import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

import { useLocation } from "react-router-dom";
const Navbar = () => {
  const na=useLocation()
if(na.pathname == "/login") {
  return null;
 }
 if(na.pathname == "/register") {
  return null;
 }
 if(na.pathname == "/getstart") {
  return null;
 }
  return (
      <nav>
        <div className="logo">
            <img src="./logo.jpg" alt="school logo" />
        </div>
        <div className="navlink">
            <ul>
                <li> <Link to={"/"}>Home</Link></li>
                <li><Link to={"/notice"}>Notice</Link></li>
                <li> <Link to={"/gallery"}>Albums</Link></li>
                <li> <Link to={"/facility"}>Facility</Link></li>
                <li><Link to={"/event"}>Event</Link></li>
                <li><Link to={"/aboutus"}>About Us</Link></li>
            </ul>
        </div>
        <div className="login">
        <button><Link to={"/login"}>Login</Link></button>
      </div>
      </nav>
  )
}

export default Navbar
