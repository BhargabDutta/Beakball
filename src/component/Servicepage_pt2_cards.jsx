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
    const { img, width, height,padding,bgColor,fontColor } = props;

  return (
    <MDBCard style={{backgroundColor:bgColor,color:fontColor}}>
      <MDBCardImage src={props.img} position='top' alt='...' style={{ width: width, height: height, padding:padding ,margin: 'auto', display: 'block'}}/>
      <MDBCardBody>
        <MDBCardTitle style={{fontWeight:"bold",fontSize:"25px"}}>{props.title}</MDBCardTitle>
        <MDBCardText style={{fontSize:"19px"}}>
        {props.content} 
        </MDBCardText>
        <MDBBtn href='#'>Lets Connect</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}