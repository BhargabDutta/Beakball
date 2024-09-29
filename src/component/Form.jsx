import React, { useEffect } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import responsive from "../styles/responsive.module.css";

export default function Form() {
  useEffect(() => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbx1WzaeT-guzxleZZXhqH9DUqIBt7hkOer-qfRLY1uYLbkTo6FVmB0c_CQIKBbTGf_5/exec";
    const form = document.forms["contact-form"];

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData(form);
        const response = await fetch(scriptURL, { method: "POST", body: formData });
        if (response.ok) {
          alert("Thank you! Your response has been submitted successfully");
          window.location.reload();
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error("Error!", error.message);
      }
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div className={responsive.formhead} style={{ padding: "40px", width: "500px" }}>
      <div style={{ fontSize: "35px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "30px" }}>Reach Us</div>
      <div className={responsive.formbox}>
        <form method='post' name='contact-form'>

          <MDBRow className='mb-4'>
            <MDBCol>
              <MDBInput id='form6Example1' label='First name' name="first_name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id='form6Example2' label='Last name' name="last_name" />
            </MDBCol>
          </MDBRow>
          <MDBInput wrapperClass='mb-4' type='text' id='form6Example5' label='Company' name="company" />
          <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' name="email" />
          <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' name="contact_number" />
          <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Message' name="message" style={{ height: '250px' }} />

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
