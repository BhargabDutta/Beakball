import React, { useRef } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import responsive from "../styles/responsive.module.css";

export default function Form() {
  // useRef to reference the form
  const formRef = useRef(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbw7k6bhMt4nu9pdhOqvXmry8xvEj6xy3QFmjYq2rEGQZKDC5rKRbdDHb75zldswC_4/exec";
    try {
      // Create FormData from the form reference
      const formData = new FormData(formRef.current);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Thank you! Your response has been submitted successfully");
        window.location.reload(); // Reload the page after submission
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className={responsive.formhead} style={{ padding: "40px", width: "500px" }}>
      <div style={{ fontSize: "35px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "30px" }}>Reach Us</div>
      <div className={responsive.formbox}>
        {/* Attach formRef to form */}
        <form ref={formRef} onSubmit={handleSubmit} method='post' name='contact-form'>

          <MDBRow className='mb-4'>
            <MDBCol>
              <MDBInput id='form6Example1' label='First name' name="first_name" required />
            </MDBCol>
            <MDBCol>
              <MDBInput id='form6Example2' label='Last name' name="last_name" required />
            </MDBCol>
          </MDBRow>
          <MDBInput wrapperClass='mb-4' type='text' id='form6Example5' label='Company' name="company" />
          <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' name="email" required />
          <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' name="contact_number" required />
          <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Message' name="message" style={{ height: '250px' }} required />

          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MDBBtn className='mb-4' type='submit' block style={{ backgroundColor: "black", width: "fit-content" }}>
              Let's Connect
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}
