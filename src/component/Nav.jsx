import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.webp";
const Nav = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}>
        <div className="container-fluid" style={{fontWeight:"bold"}}>
          <img src={Logo} style={{width:"40px",height:"auto",marginLeft:"30px"}}/>
          <NavLink className="navbar-brand" to="/" style={{paddingLeft:"10px",fontSize:"30px",color:"white"}}>Beakball</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{display:"flex",justifyContent:"right"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" exact to="/" style={{margin:"10px",color:"white"}}>HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={{margin:"10px",color:"white"}}>ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service" style={{margin:"10px",color:"white"}}>SERVICE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio" style={{margin:"10px",color:"white"}}>PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={{borderRadius:"10px",backgroundColor:"blue",color:"white",width:"max-content",margin:"10px",color:"white"}}>CONTACT US</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav