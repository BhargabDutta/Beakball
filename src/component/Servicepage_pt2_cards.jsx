import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Servicepage_pt2_cards(props) {
    const { img, width, height,padding } = props;

  return (
    <MDBCard>
      <MDBCardImage src={props.img} position='top' alt='...' style={{ width: width, height: height, padding:padding ,margin: 'auto', display: 'block'}}/>
      <MDBCardBody>
        <MDBCardTitle style={{fontWeight:"bold"}}>{props.title}</MDBCardTitle>
        <MDBCardText>
        {props.content} 
        </MDBCardText>
        <MDBBtn href='#'>Lets Connect</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}