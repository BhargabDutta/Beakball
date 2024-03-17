import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.webp";
import responsive from "../styles/responsive.module.css";
const Nav = () => {

  return (
    <>
      <div className={responsive.nav_desktop}>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}>
          <div className="container-fluid" style={{ fontWeight: "bold" }}>
            <img src={Logo} style={{ width: "40px", height: "auto", marginLeft: "30px" }} />
            <NavLink className="navbar-brand" to="/" style={{ paddingLeft: "10px", fontSize: "30px", color: "white" }}>Beakball</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{ display: "flex", justifyContent: "right" }}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" exact to="/" style={{ margin: "10px", color: "white" }}>HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/about" style={{ margin: "10px", color: "white" }}>ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/service" style={{ margin: "10px", color: "white" }}>SERVICE</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/portfolio" style={{ margin: "10px", color: "white" }}>PORTFOLIO</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/contact" style={{ borderRadius: "10px", backgroundColor: "blue", width: "max-content", margin: "10px", color: "white" }}>CONTACT US</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={responsive.nav_mobile}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Beakball</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="/">About</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="/service">Service</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="/portfolio">Portfolio</NavLink>
                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav