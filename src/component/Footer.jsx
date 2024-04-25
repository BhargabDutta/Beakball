import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from "../assets/Logo.webp";

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section style={{backgroundColor:"black"}} className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section style={{backgroundColor:"black"}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={Logo} alt=''style={{height:"auto", width:"30px",margin:"20px"}}/>
                Beakball
              </h6>
              <p>
              What You Can Imagine, We can Bring It To You.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/service' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='/portfolio' className='text-reset'>
                  Portfolio
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/Terms' className='text-reset'>
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href='/Privacy' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='/blog' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Mansarovar, Jaipur, Rajasthan.
C5, 2nd Floor, 80 Feet Road, Kiran Path, Shanthi Nagar, PIN: 302019
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sales@beakball.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />  +91 700-225-2185
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}