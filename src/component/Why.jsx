import React from 'react'
import style from '../styles/why.module.css';
import Whychoose from '../assets/Whychoose.jpg';
import styles from '../styles/Homescreen.module.css';
import responsive from "../styles/responsive.module.css";
const Why = () => {
  return (
    <>
    <div className={responsive.why_desktop}>
      <div className={style.why}>

        <div style={{ width: "100%", height: "670px", overflow: "hidden" }}>
          <div className={style.contentpart}>
            <div className={styles.flexbox}>
              <div className={styles.part1} style={{ fontSize: "35px", padding: "5px", width: "630px" }}>Pioneering Transformative Technologies to Explore New Dimensions of Endless Opportunities </div>
              <div className={styles.part2} style={{ fontSize: "20px", padding: "5px", width: "630px" }}>Beakball comes with a landscape reshaping concept that invites the business to transform their existing websites with some creative and engaging virtual tours. Whether you want to present your entire premises or a digital replica of a product to your target audience, our 3D Modeling and Virtual Tour gets you covered. We aim to change the way people engage, learn, and perceive the digital realm. </div>
            </div>
          </div>
          <img className={style.whyimg} src={Whychoose} style={{ width: "100%", objectFit: "cover", marginTop: "-100px" }} alt="why choose" />
        </div>



      </div>
    </div>


    <div className={responsive.why_mobile}>
      <div className={style.why}>

        <div style={{ width: "100%", height: "430px", overflow: "hidden" }}>
          <div style={{width:"100%",height:"fit-content",position:"absolute",zIndex:2,padding:"25px",marginTop:"150px"}}>
            <div style={{fontWeight:"bold", color:"white"}}>
            Pioneering Transformative Technologies to Explore New Dimensions of Endless Opportunities 
            </div>
            <div style={{color:"white",fontSize:"12px",paddingTop:"20px"}}>
            Beakball comes with a landscape reshaping concept that invites the business to transform their existing websites with some creative and engaging virtual tours. Whether you want to present your entire premises or a digital replica of a product to your target audience, our 3D Modeling and Virtual Tour gets you covered. We aim to change the way people engage, learn, and perceive the digital realm. 
            </div>
          </div>
          <img className={style.whyimg} src={Whychoose} style={{ width: "100%",height:"450px", objectFit: "cover",
    objectPosition: "center",marginTop: "-30px",marginBottom:"0px"}} alt="why choose" />
        </div>



      </div>
    </div>
    </>
  )
}

export default Why