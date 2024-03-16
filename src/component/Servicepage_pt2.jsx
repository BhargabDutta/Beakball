import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Servicepage_pt2_cards from '../component/Servicepage_pt2_cards';
import camera from '../assets/camera.png';
import car from '../assets/car.png';
export default function Servicepage_pt2() {
  return (
    // <MDBContainer style={{width:"100%",border:"2px solid black",height:"fit-content"}}>
    //   <MDBRow style={{border:"2px solid red"}}>
        // <MDBCol size='md'  style={{border:"2px solid blue"}}>
        //   <Servicepage_pt2_cards
        //   img={camera}
        //   width="220px" height="auto" padding="30px"
        //   title="Onsite 360 Virtual Reality Tour"
        //   content="Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence. "/>
        // </MDBCol>
        // <MDBCol size='md' style={{border:"2px solid blue"}}>
        // <Servicepage_pt2_cards
        // img={car}
        // width="450px" height="auto" padding="0px"
        // title="AI Generated 3D World"
        // content="Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page and boost the overall visitor experience. "/>
        // </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
    <div>
      <div  style={{display:"flex",flexDirection:"row"}}>
        <div>
        <MDBCol size='md'  style={{width:"fit-content",padding:"40px"}}>
          <Servicepage_pt2_cards
          img={camera}
          width="220px" height="auto" padding="30px"
          title="Onsite 360 Virtual Reality Tour"
          content="Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence. "/>
        </MDBCol>
        </div>
        <div>
        <MDBCol size='md'  style={{width:"fit-content",padding:"40px"}}>
        <Servicepage_pt2_cards
        img={car}
        width="480px" height="auto" padding="0px"
        title="AI Generated 3D World"
        content="Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page and boost the overall visitor experience. "
        bgColor="white"
        fontColor="black"/>
        </MDBCol>
        </div>
      </div>
    </div>
  );
}