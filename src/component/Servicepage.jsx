import React from 'react'
import styles from '../styles/servicepage.module.css';
import hero2 from '../assets/hero2.png';
import Servicepage_pt2 from "../component/Servicepage_pt2";
import Test from './Test';
import Whyneed from './Whyneed';
import Getstarted from './Getstarted';
import Success from './Success';
// import New from "./New";
const Servicepage = () => {
  return (
    <div>
        {/* <Nav/> */}
        <div className={styles.hero}>
            <img src={hero2} className={styles.img}/>
        </div>

      <Servicepage_pt2/>
      <Test />
      {/* <New /> */}
      <Whyneed/>
      <Getstarted/>
<Success/>
{/* <Faq/> */}
    </div>
  )
}

export default Servicepage;