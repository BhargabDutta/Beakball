import React from 'react';
import styles from '../styles/Homescreen.module.css';
import Contactus from './Contactus';
import Why from './Why';
import Services from './Services';
import Servicenext from './Servicenext';
import Firstcarousel from './Firstcarousel';
import Testimonialslider from './Testimonialslider';
import Success from './Success';
import Lastpartofhomescreen from './Lastpartofhomescreen';
import backgroundVideo from '../assets/test.mp4'; // Import your video file

const Homescreen = () => {
  return (
    <div>
      <div className={styles.section1}>
        <div style={{ position: "absolute", height: "100vh", width: "100%", zIndex: 2, fontSize:"25px", color:"white", display:"flex", alignItems:"center",justifyContent:"center" }}>
          <div style={{width:"100%",height:"auto",padding:"40px",marginTop:"300px"}}>
            <div style={{color:"white", fontSize:"30px",fontWeight:"bold"}}>Beakball: Interactive 3D Virtual Reality</div>
            <div style={{color:"white", fontSize:"30px",fontWeight:"bold"}}>Unlock New Dimensions</div>
            <div style={{color:"white", fontSize:"30px",fontWeight:"bold"}}>Where Your Brand’s Vision Meets Virtual Reality</div>
            <div style={{fontSize:"19px", marginTop:"20px"}}>Secure the competitive advantages for your business by walking ahead of your peers. Impart the capability of 3D modeling and virtual reality into your online presence.</div>
            <div style={{backgroundColor:"blue",borderRadius:"20px",fontSize:"15px",color:"white",width:"fit-content",paddingLeft:"10px",paddingRight:"10px",paddingTop:"7px",paddingBottom:"7px", marginTop:"5px"}}>DEMO TOUR</div>
          </div>
        </div>
        <video autoPlay loop muted controls={false}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.section2}>
        <Why />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <Servicenext />
      </div>

      <div className={styles.section4}>
        <Firstcarousel />
      </div>

      <div className={styles.section5}>
        <Testimonialslider />
      </div>

      <Success />
      <Contactus />
      <Lastpartofhomescreen />
    </div>
  );
};

export default Homescreen;
