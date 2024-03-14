import React from 'react';
// import Nav from './Nav';
import styles from '../styles/Homescreen.module.css';
import Contactus from './Contactus';
import Why from './Why';
import Services from './Services';
import Servicenext from './Servicenext';
import Firstcarousel from './Firstcarousel';
import Testimonialslider from './Testimonialslider';
import Success from './Success';
import Lastpartofhomescreen from './Lastpartofhomescreen';
const Homescreen = () => {
  return (
    <div>
      <div className={styles.section1}>
      <iframe src="https://bannerbeakballmain.netlify.app/" title="beakball"></iframe> 
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


<Success/>

      <Contactus />
      <Lastpartofhomescreen/>
    </div>
  )
}

export default Homescreen;