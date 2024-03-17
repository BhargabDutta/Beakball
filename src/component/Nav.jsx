import React from 'react'
import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.webp";
import responsive from "../styles/responsive.module.css";
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
const Nav = () => {

  return (
    <>
      <div className={responsive.nav_desktop}>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}>
          <div className="container-fluid" style={{ fontWeight: "bold" }}>
            <img src={Logo} style={{ width: "40px", height: "auto", marginLeft: "30px" }} />
            <Link className="navbar-brand" to="/" style={{ paddingLeft: "10px", fontSize: "30px", color: "white" }}>Beakball</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{ display: "flex", justifyContent: "right" }}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" exact to="/" style={{ margin: "10px", color: "white" }}>HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{ margin: "10px", color: "white" }}>ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service" style={{ margin: "10px", color: "white" }}>SERVICE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio" style={{ margin: "10px", color: "white" }}>PORTFOLIO</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" style={{ borderRadius: "10px", backgroundColor: "blue", width: "max-content", margin: "10px", color: "white" }}>CONTACT US</Link>
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
                <Link className="nav-link active" aria-current="page" exact to="/">Home</Link>
                <Link className="nav-link active" aria-current="page" to="/">About</Link>
                <Link className="nav-link active" aria-current="page" to="/service">Service</Link>
                <Link className="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav