import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style={{padding:"20px", background:"black"}}>
        <div style={{width:"100%", textAlign:"center", color:"white", fontSize:"25px", padding:"40px"}}>Why we need Virtual Reality?</div>
    <MDBTable bordered borderColor="white">
      <MDBTableHead>
        <tr>
          <th scope='col' style={{color:"white"}}>Bespoke Branding </th>
          <th scope='col' style={{color:"white"}}>Make your brand stand out of the crowd with your very own customized branding. From logos, fonts, and colors to everything, we design the virtual tour just according to your personalized preferences. Portray each aspect of your business with an innovative approach. </th>
          {/* <th scope='col'>Last</th>
          <th scope='col'>Handle</th> */}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
            <th scope='col' style={{color:"white"}}>Dynamic Floor Layout Viewer</th>
          <th scope='col' style={{color:"white"}}>Experience your space like never before with our dynamic floor layout viewer, tailor-made for businesses aiming to showcase their premises in the most interactive and immersive way possible. Our cutting-edge technology allows you to create virtual tours that provide a realistic sense of place and space.</th>
        </tr>
        <tr>
        <th scope='col' style={{color:"white"}}>Interactive Marketing Hotspots </th>
          <th scope='col' style={{color:"white"}}>Integrate your marketing hotspots like downloadable brochures, videos, image galleries, and much more in your virtual tour. Bestow the information about your business on a central, shareable, and interactive platform. </th>
        </tr>
        <tr>
        <th scope='col' style={{color:"white"}}>Continuous Scene Flow</th>
          <th scope='col' style={{color:"white"}}>Our state-of-the-art virtual tour allows you to unveil the different spaces and rooms of your premises with the Continuous Scene Flow feature. Just a few clicks and the user can move from room to room in a seamless manner. </th>
        </tr>
        <tr>
        <th scope='col' style={{color:"white"}}>Simplified Navigation Options</th>
          <th scope='col' style={{color:"white"}}>Just to not confuse the visitors, our virtual tours are equipped with seamless navigation options. In our tours, the user has the exact information about what they are heading to before clicking on any of the elements. </th>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}