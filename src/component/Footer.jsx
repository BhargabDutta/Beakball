import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Logo from "../assets/Logo.webp";

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-white text-center'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"10px"}}>
            <img src={Logo} alt="" style={{width:"30px",height:"auto"}} />
            <h5 className='text-uppercase'>Beakball</h5>
</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Faq
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Connect with us on</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Linkedin
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Youtube
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Facebook
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}