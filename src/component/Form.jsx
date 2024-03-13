import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

  
  return (
    <div style={{padding:"40px", width:"500px",}}>
      <div style={{fontSize:"35px", fontWeight:"bold",color:"black", textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>Reach Us</div>
    <form >
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Message' style={{ height: '250px' }} />


<div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <MDBBtn className='mb-4' type='submit' block style={{backgroundColor:"black", width:"fit-content"}}>
        Lets Connect
      </MDBBtn>
      </div>
    </form>

    </div>
  );
}