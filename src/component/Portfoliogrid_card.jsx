import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <MDBCard>
      <MDBCardImage src={props.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle style={{fontWeight:"bold"}}>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.content}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}