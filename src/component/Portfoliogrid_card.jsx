import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Portfoliogrid_card(props) {
  return (
    <MDBCard style={{backgroundColor:"transparent"}}>
      <MDBCardImage src={props.img} position='top' alt='...' style={{width:"100%",borderRadius:"10px",marginTop:"10px"}} />
      <MDBCardBody>
        <MDBCardTitle style={{fontWeight:"bold"}}>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.content}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}