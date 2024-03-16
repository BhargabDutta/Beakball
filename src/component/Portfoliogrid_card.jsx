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
    <MDBCard>
      <MDBCardImage src={props.img} position='top' alt='...' style={{width:"100%",borderRadius:"10px",marginTop:"10px",height:"150px",cursor:"pointer"}} />
      <MDBCardBody>
        <MDBCardTitle style={{fontWeight:"bold"}}>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.content}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}