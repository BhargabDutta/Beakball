import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from '../assets/Logo.webp';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [openNavColor, setOpenNavColor] = useState(false);
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  const [openNavColorThird, setOpenNavColorThird] = useState(false);

  return (
    <>

      <MDBNavbar expand='lg' light style={{position:"fixed", zIndex:"4",backgroundColor:"white", width:"100%"}} >
        <MDBContainer fluid>
          <img src={Logo} style={{width:"40px",height:"auto"}}/>
          <MDBNavbarBrand href='/Home' style={{paddingLeft:"5px"}}>Beakball</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0' style={{paddingLeft:"70%"}}>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='/servicepage'>
                  Service
                </MDBNavbarLink>
                {/* <NavLink to="/Service">Contact</NavLink> */}
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Portfolio'>Portfolio</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{backgroundColor:"blue",borderRadius:"30px"}}>
                <MDBNavbarLink href='/Contact' style={{color:"white",fontWeight:"bold"}}>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div style={{height:"50px", width:"100%"}}></div>
    </>
  );
}