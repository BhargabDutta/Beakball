import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from "../assets/Logo.webp";
import styles from "../styles/footer.module.css";
export default function App() {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ overflow: "hidden" }}>
        {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-0 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section> */}

        <section style={{ height: "fit-content", padding: "20px" }}>
          <MDBContainer className='text-center text-md-start' style={{ height: "fit-content" }}>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' style={{ color: "white" }}>
                  <img src={Logo} alt="" style={{ width: "30px", height: "auto", marginRight: "20px" }} />
                  Beakball
                </h6>
                <p style={{color:"white"}}>
                  What You Can Imagine, We can Bring It To You.
                </p>
                <div>
                  <a href='https://in.linkedin.com/company/beakball?trk=public_profile_topcard-current-company' className={styles.icons} target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" style={{ margin: "5px" }} /></a>

                  <a href='https://www.instagram.com/beakball_fable?igsh=MTNzNnpqcDdwM3E1ZA==' className={styles.icons} target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" style={{ margin: "5px" }} />
                  </a>

                  <a href='https://www.youtube.com/@BeakballFable' className={styles.icons} target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" style={{ margin: "5px" }} />
                  </a>

                </div>

              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' style={{ color: "white" }}>Quick Links</h6>
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

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' style={{ color: "white" }}>Useful links</h6>
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
                  <a href='#!' className='text-reset'>
                    Copyright
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' style={{ color: "white" }}>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  Mansarovar, Jaipur, Rajasthan.
                  <br />C5, 2nd Floor, 80 Feet Road, Kiran Path, Shanthi Nagar, PIN: 302019

                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  sales@beakball.com
                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' />  +917002252185
                </p>
                {/* <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
      </MDBFooter>
    </>
  );
}