import React from 'react'
import styles from '../styles/servicepage.module.css';
import hero2 from '../assets/hero2.png';
import Servicepage_pt2 from "../component/Servicepage_pt2";
import Test from './Test';
import Whyneed from './Whyneed';
import Whyneed_mobile from "../component/Whyneed_mobile";
import Getstarted from './Getstarted';
import Success from './Success';
import Successpt2 from './Successpt2';
import backgroundVideo from '../assets/servicevideo.mp4';
import Faq from './Faq';
import responsive from "../styles/responsive.module.css";
// import Whyneed from './Whyneed';
// import New from "./New";
const Servicepage = () => {
  return (
    <>
      <div>
        <div className={responsive.servicehero_desktop}>
        <div className={styles.hero}>

          <div style={{ position: "absolute", height: "100vh", width: "100%", zIndex: 2, fontSize: "25px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%", height: "auto", padding: "80px", marginTop: "150px" }}>
              <div style={{ color: "white", fontSize: "60px", fontWeight: "bold", width: "400px" }}>Virtual Reality Website  </div>
              <div>
                <div style={{ fontSize: "19px", marginTop: "20px" }}>Create your interactive Virtual reality tour with Beakball</div>
                <div style={{ backgroundColor: "blue", borderRadius: "10px", fontSize: "20px", color: "white", width: "fit-content", paddingLeft: "10px", paddingRight: "10px", paddingTop: "7px", paddingBottom: "7px", marginTop: "30px", fontWeight: "bold" }}>Experience a tour</div>
              </div>
            </div>
          </div>
          <video autoPlay loop muted controls={false} style={{width:"100%",height:"100vh",objectFit:"cover"}}>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>

        <div className={responsive.servicehero_mobile}>
        <div className={styles.hero}>

          <div style={{ position: "absolute", height: "fit-content", width: "100%", zIndex: 2, fontSize: "25px", color: "white", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{ width: "100%", height: "100vh", padding: "10px", paddingTop: "35px",backgroundColor:"#00000057"}}>
              <div style={{ color: "white", fontSize: "30px", fontWeight: "bold", width: "400px",marginTop:"150px" }}>Virtual Reality Website  </div>
              <div>
                <div style={{ fontSize: "25px", marginTop: "30px" }}>Create your interactive Virtual reality tour with Beakball</div>
                <div style={{ backgroundColor: "blue", borderRadius: "10px", fontSize: "20px", color: "white", width: "fit-content", paddingLeft: "10px", paddingRight: "10px", paddingTop: "3px", paddingBottom: "3px", marginTop: "30px", fontWeight: "bold" }}>Experience a tour</div>
              </div>
            </div>
          </div>
          <video autoPlay loop muted controls={false} style={{ height: '100vh', width: '100%', objectFit: 'cover' }}>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>


        <Servicepage_pt2 />

        {/* <Test /> */}
        {/* <New /> */}
        {/* <Whyneed /> */}
        <Getstarted />
        <Whyneed style={responsive.whyneed_desktop} />
        <Whyneed_mobile />
        <Successpt2 />
        {/* <Faq /> */}
      </div>
    </>
  )
}

export default Servicepage;