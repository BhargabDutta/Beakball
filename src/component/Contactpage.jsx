import React from 'react'
import Profile from "../component/Profile";
import Form from "../component/Form";
import responsive from "../styles/responsive.module.css";
const Contactpage = () => {
  return (
    <div style={{overflowX:"hidden",paddingTop:"50px" }}>
        <div className={responsive.contactflex}>
          <Profile/>
          <Form/>
        </div>
    </div>
  )
}

export default Contactpage