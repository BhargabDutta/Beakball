import React from 'react'
import styles from '../styles/servicepage.module.css';
import hero2 from '../assets/hero2.png';
import Servicepage_pt2 from "../component/Servicepage_pt2";
import Test from './Test';
import Whyneed from './Whyneed';
import Getstarted from './Getstarted';
import Success from './Success';
import Successpt2 from './Successpt2';
import backgroundVideo from '../assets/servicevideo.mp4';
import Faq from './Faq';
// import New from "./New";
const Servicepage = () => {
  return (
    <div>
      {/* <Nav/> */}
      <div className={styles.hero}>
        {/* <img src={hero2} className={styles.img}/> */}

        <div style={{ position: "absolute", height: "100vh", width: "100%", zIndex: 2, fontSize: "25px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", height: "auto", padding: "80px", marginTop: "250px" }}>
            <div style={{ color: "white", fontSize: "60px", fontWeight: "bold",width:"400px" }}>Virtual Reality Website  </div>
            {/* <div style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Unlock New Dimensions</div> */}
            {/* <div style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Where Your Brand’s Vision Meets Virtual Reality</div> */}
            <div style={{ fontSize: "19px", marginTop: "20px" }}>Create your interactive Virtual reality tour with Beakball</div>
            <div style={{ backgroundColor: "blue", borderRadius: "10px", fontSize: "15px", color: "white", width: "fit-content", paddingLeft: "10px", paddingRight: "10px", paddingTop: "7px", paddingBottom: "7px", marginTop: "70px", fontWeight: "bold" }}>Experience a tour</div>
          </div>
        </div>
        <video autoPlay loop muted controls={false}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <Servicepage_pt2 />
      {/* <Test /> */}
      {/* <New /> */}
      {/* <Whyneed /> */}
      <Getstarted />
      <Successpt2 />
      <Faq/>
    </div>
  )
}

export default Servicepage;