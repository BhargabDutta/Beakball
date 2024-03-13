import React from 'react'
import Profile from "../component/Profile";
import Form from "../component/Form";
const Contactpage = () => {
  return (
    <div>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Profile/>
          <Form/>
        </div>
    </div>
  )
}

export default Contactpage