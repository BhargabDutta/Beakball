import React from 'react'
import portfoliohero from '../assets/portfoliohero.png';
import porthero from '../assets/porthero.png';
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import servicenextplay from '../assets/servicenextplay.png';
import vrlogo from "../assets/3.png";
import responsive from "../styles/responsive.module.css";
const Portfoliohero = () => {
  return (
    <>
      <div className={responsive.portfoliohero_desktop}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          height: "100vh"
        }}>
          <img src={porthero} style={{ position: "absolute", zIndex: "-1", height: "100vh", width: "100%", objectFit: "cover" }} />

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "10px", width: "fit-content", borderRadius: "40px", backgroundColor: "white", marginTop: "80px" }}>

            <div style={{ width: "250px", padding: "5px" }}>
              <div style={{ fontSize: "25px", color: "black" }}>EXPLORE THE WORLD FROM YOUR DIGITAL DEVICE</div>
              <hr style={{ width: "95%", border: "2px solid blue", margin: "0" }} />

              <div style={{ fontSize: "13px", color: "black", paddingTop: "20px", paddingBottom: "40px", width: "200px" }}>Experience the wonders of the world on your digital devices  and experience 360 Virtual reality.</div>
              <div style={{ fontSize: "19px", width: "fit-content", padding: "5px", paddingLeft: "15px", paddingRight: "15px", backgroundColor: "black", color: "white", cursor: "pointer", marginBottom: "70px" }}>Lets Connect</div>
              <div>
                {/* <img></img> */}
                <div style={{ display: "flex", flexDirection: "row", }}>
                  <div>
                    <img src={vrlogo} alt="" style={{ width: "70px", height: "fit-content" }} />
                  </div>
                  <div style={{ fontSize: "15px", color: "black", width: "fit-content", alignSelf: "center", paddingLeft: "10px" }}>
                    VR Compatibility
                  </div>
                </div>
              </div>
            </div>

            <img style={{ height: "450px", width: "410px", borderRadius: "40px", objectFit: "cover" }} src={portfoliohero} />

            <div style={{ paddingLeft: "50px", marginRight: "10px" }}>
              <div style={{ width: "250px" }}>
                <div style={{ position: "relative" }}>
                  <img src={card3} style={{ width: "250px", height: "120px", borderRadius: "30px" }} alt="" />
                  <img src={servicenextplay} style={{ width: "50px", height: "auto", position: "absolute", zIndex: "2", cursor: "pointer", left: "0", right: "0", top: "0", bottom: "0", margin: "auto" }} />
                </div>

                <div style={{ fontSize: "15px", fontWeight: "bold", paddingTop: "10px", paddingBottom: "0px" }}>Beakverse</div>
                <div style={{ fontSize: "13px", width: "250px" }}>Experience your modern home where you will find your permanent with virtual reality.</div>
              </div>

              <div style={{ width: "250px", marginTop: "20px" }}>
                <div style={{ position: "relative" }}>
                  <img src={card2} style={{ width: "250px", height: "120px", borderRadius: "30px" }} alt="" />
                  <img src={servicenextplay} style={{ width: "50px", height: "auto", position: "absolute", zIndex: "2", cursor: "pointer", left: "0", right: "0", top: "0", bottom: "0", margin: "auto" }} />
                </div>
                <div style={{ fontSize: "15px", fontWeight: "bold", paddingTop: "10px" }}>University and College</div>
                <div style={{ fontSize: "13px", width: "250px" }}>We created the virtual reality tour of this college while injecting each road, department, and building of the campus. Roam through the walkways and explore the college premises with a VR tour.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={responsive.portfoliohero_mobile}>
        <div style={{display:"flex",flexDirection:"row",width: "100%",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:"170px"}}>
            <div style={{ width: "150px", padding: "5px",paddingTop:"20px" }}>
              <div style={{ fontSize: "10px", color: "black", }}>EXPLORE THE WORLD FROM YOUR DIGITAL DEVICE</div>
              <hr style={{ width: "95%", border: "2px solid blue", margin: "0" }} />

              <div style={{ fontSize: "9px", color: "black", paddingTop: "20px", paddingBottom: "40px", width: "170px" }}>Experience the wonders of the world on your digital devices  and experience 360 Virtual reality.</div>
              <div style={{ fontSize: "9px", width: "fit-content", padding: "5px", paddingLeft: "15px", paddingRight: "15px", backgroundColor: "black", color: "white", cursor: "pointer", marginBottom: "50px" }}>Lets Connect</div>
              <div style={{width:"120px"}}>
                {/* <img></img> */}
                <div style={{ display: "flex", flexDirection: "row"}}>
                  <div>
                    <img src={vrlogo} alt="" style={{ width: "30px", height: "fit-content" }} />
                  </div>
                  <div style={{ fontSize: "9px", color: "black", width: "fit-content", alignSelf: "center", paddingLeft: "10px"}}>
                    VR Compatibility
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src={porthero} style={{width:"240px",height:"100px",objectFit:"cover",padding:"10px",borderRadius:"30px"}} alt="" />
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"15px"}}>
            <div style={{ width: "fit-content" }}>
                <div style={{ position: "relative" }}>
                  <img src={card3} style={{ width: "100px", height: "50px", borderRadius: "15px" }} alt="" />
                </div>

                <div style={{ fontSize: "15px", fontWeight: "bold", paddingTop: "10px", paddingBottom: "0px" }}>Beakverse</div>
                <div style={{ fontSize: "10px", width: "100px",padding:"3px" }}>Experience your modern home where you will find your permanent with virtual reality.</div>
              </div>

              <div style={{ width: "fit-content" }}>
                <div style={{ position: "relative" }}>
                  <img src={card2} style={{ width: "100px", height: "50px", borderRadius: "15px" }} alt="" />
                </div>

                <div style={{ fontSize: "15px", fontWeight: "bold", paddingTop: "10px", paddingBottom: "0px" }}>University</div>
                <div style={{ fontSize: "10px", width: "100px",padding:"3px" }}>Roam through the walkways and explore the college premises with a VR tour.</div>
              </div>
              
            </div>

            
          </div>
        </div>
      </div>



    </>



  )
}

export default Portfoliohero;