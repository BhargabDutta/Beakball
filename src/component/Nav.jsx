import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo.webp";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{fontWeight:"bold"}}>
          <img src={Logo} style={{width:"40px",height:"auto"}}/>
          <NavLink className="navbar-brand" to="/" style={{paddingLeft:"10px"}}>Beakball</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{display:"flex",justifyContent:"right"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" exact to="/" style={{margin:"10px"}}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={{margin:"10px"}}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service" style={{margin:"10px"}}>Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio" style={{margin:"10px"}}>Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" style={{borderRadius:"30px",backgroundColor:"blue",color:"white",width:"max-content",margin:"10px"}}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav