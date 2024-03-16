import React from 'react'
import style from '../styles/firstcarousel.module.css';
import Cardslider from './Cardslider';
const Firstcarousel = () => {
  return (
    <>
    <div className={style.fullcntr}>
        <div className={style.heading}>
        Our Industry: Transform Your Business into Industry Leading Brand with VR
        </div>
        <div className={style.subheading}>
        Bringing Virtual Reality and 3D Modeling experience to the forefront for better information consumption across the industries. 
        </div>
</div>
        <div className={style.carouselpart}>
          <Cardslider/>
        </div>
    
    </>
  )
}

export default Firstcarousel