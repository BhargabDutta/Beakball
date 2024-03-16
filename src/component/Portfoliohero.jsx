import React from 'react'
import portfoliohero from '../assets/portfoliohero.png';
import porthero from '../assets/porthero.png';
import pt1 from '../assets/pt1.png';
import pt2 from '../assets/pt2.png';
const Portfoliohero = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
height:"100vh"}}>
      <img src={porthero} style={{position:"absolute",zIndex:"-1",height:"120vh",width:"100%",objectFit:"cover"}}/>

      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", border: "2px solid black", padding: "15px", width: "fit-content" ,borderRadius:"40px",backgroundColor:"white",marginTop:"80px"}}>

        <div style={{ width: "300px", padding: "10px" }}>
          <div style={{ fontSize: "25px", color: "black"}}>EXPLORE THE WORLD FROM YOUR DIGITAL DEVICE</div>
          <div style={{ fontSize: "16px", color: "black", paddingTop: "20px", paddingBottom: "40px", width: "200px" }}>Experience the wonders of the world on your digital devices  and experience 360 Virtual reality.</div>
          <div style={{ fontSize: "19px", width: "fit-content", padding: "10px", backgroundColor: "black", color: "white" }}>Lets Connect</div>
          <div>
            <img></img>
            <div style={{ fontSize: "19px", color: "black", marginTop: "100px" }}>VR Compatibility</div>
          </div>
        </div>

        <img style={{ height: "450px", width: "420px", borderRadius: "40px"}} src={portfoliohero}  />

        <div style={{ paddingLeft: "60px" }}>
          <div style={{ width: "300px", }}>
            <img src={pt1} style={{ width: "250px", height: "130px"}} alt="" />
            <div style={{ fontSize: "15px", fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px" }}>Beakverse</div>
            <div style={{ fontSize: "13px",width: "270px" }}>Experience your modern home where you will find your permanent with virtual reality.</div>
          </div>

          <div style={{ width: "300px", }}>
            <img src={pt2} style={{ width: "250px", height: "130px",}} alt="" />
            <div style={{ fontSize: "15px", fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px" }}>University and College</div>
            <div style={{ fontSize: "13px",width: "270px"}}>We created the virtual reality tour of this college while injecting each road, department, and building of the campus. Roam through the walkways and explore the college premises with a VR tour.
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Portfoliohero;