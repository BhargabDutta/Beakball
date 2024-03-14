import React from 'react'
import style from '../styles/why.module.css';
import Whychoose from '../assets/Whychoose.jpg';
import styles from '../styles/Homescreen.module.css';
const Why = () => {
  return (
    <div>
        <div className={style.why}>
           
            <img className={style.whyimg} src={Whychoose} style={{height:"750px",width:"100%", objectFit:"cover"}} alt="why choose" />

            <div className={style.contentpart}>
            <div className={styles.flexbox}>
                <div className={styles.part1} style={{fontSize:"35px",padding:"5px",width:"630px",border:"2px solid green"}}>Pioneering Transformative Technologies to Explore New Dimensions of Endless Opportunities </div>
                <div className={styles.part2} style={{fontSize:"20px",padding:"5px",width:"630px",border:"2px solid green"}}>Beakball comes with a landscape reshaping concept that invites the business to transform their existing websites with some creative and engaging virtual tours. Whether you want to present your entire premises or a digital replica of a product to your target audience, our 3D Modeling and Virtual Tour gets you covered. We aim to change the way people engage, learn, and perceive the digital realm. </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Why