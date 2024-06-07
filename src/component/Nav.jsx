// import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.webp";
import responsive from "../styles/responsive.module.css";
import React, { Component } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import animation from "../styles/animation.module.css";
import "../styles/nav.css";
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
                  <Link className="nav-link" to="/about" style={{ margin: "10px", color: "white" }}>ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio" style={{ margin: "10px", color: "white" }}>PORTFOLIO</Link>
                </li>

                <li>
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle tag='a' className='nav-link' style={{ color: "white",cursor:"pointer" }}>
                        SERVICES
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link><Link to="/VR">Virtual Reality</Link></MDBDropdownItem>
                        <MDBDropdownItem link href="https://beakballaugment.netlify.app/">Augmented Reality</MDBDropdownItem>
                        <MDBDropdownItem link>Artificial Intelligence</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blog" style={{ margin: "10px", color: "white" }}>BLOG</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact" style={{ borderRadius: "10px", backgroundColor: "blue", width: "max-content", margin: "10px", color: "white" }}>CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={responsive.nav_mobile} >
        {/* <div style={{height:"60px",width:"100%"}}></div> */}
        <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", width: "100vw" }}>
          <div className="container-fluid">

            <NavLink className="navbar-brand" exact to="/" ><img src={Logo} style={{ width: "35px", height: "auto", marginLeft: "0px" }} /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <svg
                fill="#ffffff"
                viewBox="0 0 100 100"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ width: '35px', height: '35px' }}
              >
                {/* Your SVG path here */}
                <svg fill="#ffffff" viewBox="0 0 100 100" version="1.1" xml: space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g> <g id="_x34_"> <path d="M72.8,80.7H26.6c-5.9,0-10.7-4.8-10.7-10.7v-6c0-0.8,0.7-1.5,1.5-1.5h0.1c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8 c3.3,0,5.6-1.1,6.6-2.1c0.9-1.1,2.3-1.7,3.9-1.7h2.9c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.2,0,5.6-1.1,6.6-2.1 c0.9-1.1,2.3-1.7,3.9-1.7h2.4c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1H82 c0.8,0,1.5,0.7,1.5,1.5v6C83.5,75.9,78.7,80.7,72.8,80.7z M18.9,67.6V70c0,4.2,3.4,7.7,7.7,7.7h46.2c4.2,0,7.7-3.4,7.7-7.7v-2.8 c-1.8,1.3-4.5,2-7.5,2c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.4c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.9c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 C23.2,69.3,20.8,68.7,18.9,67.6z M80.3,57.5H19.9c-3.9,0-7.1-3.3-7.1-7.4c0-2,0.7-3.8,2-5.2c1.4-1.4,3.1-2.2,5-2.2h41 c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h10.5c3.9,0,7.1,3.3,7.1,7.4c0,2-0.7,3.8-2,5.2 C84,56.7,82.2,57.5,80.3,57.5z M19.9,45.6c-1.1,0-2.1,0.4-2.9,1.3c-0.8,0.8-1.2,2-1.2,3.2c0,2.4,1.8,4.4,4.1,4.4h60.4 c1.1,0,2.1-0.4,2.9-1.3c0.8-0.8,1.2-2,1.2-3.2c0-2.4-1.8-4.4-4.1-4.4h-9.9l-5.5,4.7c-0.3,0.3-0.8,0.4-1.2,0.3 c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H19.9z M63.9,50.7c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H20.1c-0.8,0-1.5-0.7-1.5-1.5 v-6.8c0-0.8,0.7-1.5,1.5-1.5h59.3c0.8,0,1.5,0.7,1.5,1.5v6.8c0,0.8-0.7,1.5-1.5,1.5h-9l-5.5,4.7C64.6,50.6,64.3,50.7,63.9,50.7z M21.6,42.6h39.2c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h8v-3.8H21.6V42.6z M61.9,41.3 M73,69.3 c-4.2,0-7.8-1.5-9.3-3.8H59c-1.5,2.3-5.1,3.8-9.3,3.8c-4.2,0-7.8-1.5-9.3-3.8h-5.2c-1.5,2.3-5.1,3.8-9.3,3.8c-4.4,0-8.1-1.6-9.4-4 c-2.3-0.7-3.9-2.8-3.9-5.2c0-2.5,1.8-4.7,4.2-5.3c0.2-0.1,0.4-0.1,0.6-0.1H82c3,0,5.4,2.4,5.4,5.4c0,2.9-2.3,5.3-5.1,5.4 C80.8,67.8,77.2,69.3,73,69.3z M58.1,62.5h6.5c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8 c0.2-0.6,0.8-1,1.4-1H82c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H17.8c-0.1,0-0.1,0-0.2,0c-1.2,0.2-2.1,1.2-2.1,2.4 s0.9,2.2,2.1,2.4c0.2,0,0.3,0.1,0.4,0.1c0.4,0.2,0.8,0.5,0.9,0.9c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1 h7c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,6.9,2.8c3.7,0,6.5-1.4,6.9-2.8C56.9,62.9,57.4,62.5,58.1,62.5z M82,38.9H17.4 c-0.8,0-1.5-0.7-1.5-1.5v-1.8c0-9,7.3-16.3,16.3-16.3h34.9c9,0,16.3,7.3,16.3,16.3v1.8C83.5,38.2,82.8,38.9,82,38.9z M18.9,35.9 h61.6v-0.3c0-7.3-6-13.3-13.3-13.3H32.3c-7.3,0-13.3,6-13.3,13.3V35.9z M31.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1 c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C30.9,31.8,31.3,31.6,31.6,31.4z M48.9,31.4 l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4 C48.2,31.8,48.6,31.6,48.9,31.4z M65.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8 c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C64.9,31.8,65.3,31.6,65.6,31.4z"></path> </g> <g id="_x35_"></g> <g id="_x36_"></g> <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g> <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g> <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g> <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g> <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g> <g id="_x32_2"></g> <g id="_x32_3"></g> <g id="_x32_4"></g> </g></svg>
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "center", padding: "0px", marginTop: "10px", marginBottom: "15px", height: "50px" }}>
                <NavLink className="nav-link" to="/about" activeClassName="active-link" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "10px", width: "auto", color: "white" }}>About</NavLink>

                <NavLink className="nav-link" to="/service" activeClassName="active-link" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "10px", width: "auto", color: "white" }}>Service</NavLink>

                <NavLink className="nav-link" to="/portfolio" activeClassName="active-link" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "10px", width: "auto", color: "white" }}>Portfolio</NavLink>

                <NavLink className="nav-link" to="/blog" activeClassName="active-link" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "10px", width: "auto", color: "white" }}>Blog</NavLink>

                <NavLink className="nav-link" to="/contact" activeClassName="active-link" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "2px", paddingBottom: "2px", borderRadius: "10px", width: "auto", backgroundColor: "blue", color: "white" }}>Contact Us</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav