import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from '../styles/Homescreen.module.css';
import Contactus from './Contactus';
import Why from './Why';
import Services from './Services';
import Servicenext from './Servicenext';
import Firstcarousel from './Firstcarousel';
import Testimonialslider from './Testimonialslider';
// import Success from './Success';
// import Lastpartofhomescreen from './Lastpartofhomescreen';
import backgroundVideo from '../assets/test.mp4'; // Import your video file
import Successpt2 from './Successpt2';
// import Successpt3 from './Successpt3';
import responsive from "../styles/responsive.module.css";
const Homescreen = () => {
//   const isHighResolution = window.matchMedia("(min-resolution: 2dppx)").matches;
// const videoSrc = isHighResolution ? highQualityVideo : lowQualityVideo;
  return (
    <div>
      <div className={responsive.home_hero_desktop}>
        <div className={styles.section1}>
          <div style={{ position: "absolute", height: "100vh", width: "100%", zIndex: 2, fontSize: "25px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%", height: "auto", padding: "80px", marginTop: "150px" }}>
              <div style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Feels Like Real Because It Is Real</div>
              {/* <div style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Unlock New Dimensions</div>
            <div style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Where Your Brand’s Vision Meets Virtual Reality</div> */}
              <div style={{ fontSize: "19px", marginTop: "20px" }}>Explore a Virtual Reality world where you can feel everything right in front of you, literally from anywhere.</div>
              <a href='https://banner.beakball.com/' target='_blank'>
                <div style={{ backgroundColor: "blue", borderRadius: "10px", fontSize: "20px", color: "white", width: "fit-content", paddingLeft: "10px", paddingRight: "10px", paddingTop: "7px", paddingBottom: "7px", marginTop: "20px", fontWeight: "bold", cursor: "pointer" }}>Demo Tour</div></a>
            </div>
          </div>
          <LazyLoad>
            <video autoPlay loop muted controls={false} style={{ width: "100%", height: "100vh", objectFit: "cover" }} playsinline webkit-playsinline>
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>

        </div>
      </div>

      <div className={responsive.home_hero_mobile}>
        <div className={styles.section1}>
          <div style={{ position: "absolute", height: "100vh", width: "100%", zIndex: 2, fontSize: "25px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%", height: "auto", padding: "20px", marginTop: "0px" }}>
              {/* <div style={{ color: "white", fontSize: "25px", fontWeight: "bold", paddingTop: "20px" }}>Beakball: Interactive 3D Virtual Reality</div>
              <div style={{ color: "white", fontSize: "20px", fontWeight: "bold", paddingTop: "20px" }}>Unlock New Dimensions</div> */}
              <div style={{ color: "white", fontSize: "20px", fontWeight: "bold", paddingTop: "20px" }}>Feels Like Real Because It Is Real</div>
              <div style={{ fontSize: "15px", marginTop: "20px" }}>Explore a Virtual Reality world where you can feel everything right in front of you, literally from anywhere.</div>
              <a href='https://banner.beakball.com/' target='_blank'>
                <div style={{ backgroundColor: "blue", borderRadius: "5px", fontSize: "20px", color: "white", width: "fit-content", paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px", marginTop: "10px", fontWeight: "bold" }}>Demo Tour</div></a>
            </div>
          </div>
          <video autoPlay loop muted controls={false} style={{ height: '100vh', width: '100%', objectFit: 'cover' }} playsinline webkit-playsinline>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
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

      <Successpt2 />
      {/* <Successpt3/> */}
      <Contactus />
      {/* <Lastpartofhomescreen /> */}
    </div>
  );
};

export default Homescreen;
