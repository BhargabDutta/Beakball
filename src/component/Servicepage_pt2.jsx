import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Servicepage_pt2_cards from '../component/Servicepage_pt2_cards';
import camera from '../assets/camera.png';
import car from '../assets/car.png';
import responsive from "../styles/responsive.module.css";
export default function Servicepage_pt2() {
  return (
    <>
      <div className={responsive.service_card_mobile} >
        <MDBContainer style={{ width: "100%",height: "fit-content" }}>
          <MDBRow>
            <MDBCol size='md'>
              <Servicepage_pt2_cards
                img={camera}
                width="220px" height="auto" padding="30px"
                title="Onsite 360 Virtual Reality Tour"
                content="Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence. " />
            </MDBCol>
            <MDBCol size='md' style={{marginTop:"35px" }}>
              <Servicepage_pt2_cards
                img={car}
                width="300px" height="190px" padding="0px"
                title="AI Generated 3D World"
                content="Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page and boost the overall visitor experience. "
                 />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className={responsive.service_card_desktop}>
        <div style={{ display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"center",gap:"20px" }}>
          <div>
            <MDBCol size='md' style={{ width: "600px", padding: "40px" }}>
              <Servicepage_pt2_cards
                img={camera}
                width="220px" height="auto" padding="30px"
                title="Onsite 360 Virtual Reality Tour"
                content="Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence. " />
            </MDBCol>
          </div>
          <div>
            <MDBCol size='md' style={{ width: "600px", padding: "40px" }}>
              <Servicepage_pt2_cards
                img={car}
                width="480px" height="auto" padding="0px"
                title="AI Generated 3D World"
                content="Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page. "
                bgColor="white"
                fontColor="black" />
            </MDBCol>
          </div>
        </div>
      </div>
    </>
  );
}