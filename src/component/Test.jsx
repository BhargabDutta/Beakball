import React, {useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import responsive from "../styles/responsive.module.css";
SwiperCore.use([]);

const Cardslider = () => {

    const sliderDesktopRef = useRef(null);

    return (
        <>
        <div className={responsive.cards_heroblog}>
        <Swiper
            // ref={sliderRef}
            ref={sliderDesktopRef}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}// Enable loop
            autoplay={{ delay: 2000 }} 
        >
            <SwiperSlide style={{padding:"10%", height:"100vh",color:"white",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <h2 style={{marginBottom:"30px",fontWeight:"light"}}>Welcome to</h2>
              <h1 style={{marginBottom:"30px"}}>Beakball</h1>
              <h3 style={{marginBottom:"30px", fontWeight:"lighter"}}>What you can Imagine, We can Bring it to You</h3>
                <div style={{color:"white", background:"blue", padding:"5px", borderRadius:"10px",width:"fit-content"}}><h5>Experinece a Tour</h5></div>
            </SwiperSlide>
            <SwiperSlide style={{padding:"10%", height:"100vh" ,color:"white",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h2 style={{marginBottom:"30px",fontWeight:"light"}}>Virtual Tour</h2>
              <h1 style={{marginBottom:"30px"}}>Everything you need to know bout</h1>
              <h3 style={{marginBottom:"30px", fontWeight:"lighter"}}>Globally, virtual reality is praising businesses for growth. This fast pace is increasing the.... </h3>
                <div style={{color:"white", background:"blue", padding:"5px", borderRadius:"10px",width:"fit-content"}}><h5>Read More</h5></div>
            </SwiperSlide>
            {/* Add more SwiperSlides if needed */}
        </Swiper>
        </div>

        <div>
        </div>
        </>
    );
}

export default Cardslider;

