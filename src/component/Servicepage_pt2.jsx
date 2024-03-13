import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Servicepage_pt2_cards from '../component/Servicepage_pt2_cards';
import camera from '../assets/camera.webp';
import car from '../assets/car.webp';
export default function App() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
          <Servicepage_pt2_cards
          img={camera}
          width="220px" height="auto" padding="30px"
          title="Onsite 360 Virtual Reality Tour"
          content="Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence. "/>
        </MDBCol>
        <MDBCol size='md'>
        <Servicepage_pt2_cards
        img={car}
        width="400px" height="auto" padding="70px"
        title="AI Generated 3D World"
        content="Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page and boost the overall visitor experience. "/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}