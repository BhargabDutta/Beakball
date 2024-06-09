import React, { useState } from 'react';
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
export default function App() {
  const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' style={{position:"fixed",zIndex:"4",width:"100vw",height:"fit-content",paddingTop:"0px",paddingBottom:"0px"}}>
      <MDBContainer fluid style={{backgroundColor:"#00000080",backdropFilter:"blur(10px)",paddingTop:"10px",paddingBottom:"10px"}}>
      <MDBNavbarBrand href='https://www.beakball.com' style={{color:"white",fontWeight:"bold",gap:"10px"}}>
            <img
              src='https://www.beakball.com/assets/Logo-CjjAgmgS.webp'
              height='40'
              alt=''
            />Beakball</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
          style={{color:"white",fontWeight:"bold"}}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight} style={{justifyContent:"right"}} >
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' style={{gap:"10px",justifyContent:"center",cursor:"pointer"}}>
            <MDBNavbarItem>
              <MDBNavbarLink>
              <Link active aria-current='page' to='/' style={{color:"white",fontWeight:"bold"}}>
                Home
              </Link></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
              <Link active aria-current='page' to='/about' style={{color:"white",fontWeight:"bold"}}>
                About
              </Link></MDBNavbarLink>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBNavbarLink>
              <Link active aria-current='page' to='/portfolio' style={{color:"white",fontWeight:"bold"}}>
                Portfolio
              </Link></MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem>
            <MDBNavbarLink>
              <Link to='/blog' style={{color:"white",fontWeight:"bold"}}>Blog</Link>
            </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' style={{color:"white",fontWeight:"bold"}}>
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link ><a href='https://virtual.beakball.com' target="_blank">Virtual Reality</a></MDBDropdownItem>
                  <MDBDropdownItem link ><a href='https://augment.beakball.com' target="_blank">Augmented Reality</a></MDBDropdownItem>
                  <MDBDropdownItem link>Artificial Intelligence</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink>
              <Link to='/contact' style={{color:"white",fontWeight:"bold"}}>Contact</Link>
            </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}