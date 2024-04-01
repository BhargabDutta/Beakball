import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// import '../styles/successpt2.css';
import styles from "../styles/successpt2.module.css";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import responsive from "../styles/responsive.module.css";

import success1 from "../assets/success1.png";
import success2 from "../assets/success2.png";
import success3 from "../assets/success3.png";
import success4 from "../assets/success4.jpeg";
import success5 from "../assets/success5.jpeg";
import success6 from "../assets/success6.jpeg";

export default function Successpt2() {
  return (
    <>

    <div className={styles.head}>Success Stories</div>
    <div className={responsive.success_desktop}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.desktop_swiperslide}>
          <img className={styles.desktop_slideimg} src={success1} />
          hehehe
        </SwiperSlide>
        <SwiperSlide className={styles.desktop_swiperslide}>
          <img className={styles.desktop_slideimg} src={success2} />
        </SwiperSlide>
        <SwiperSlide className={styles.desktop_swiperslide}>
          <img className={styles.desktop_slideimg} src={success3} />
        </SwiperSlide>
        <SwiperSlide className={styles.desktop_swiperslide}>
          <img className={styles.desktop_slideimg} src={success4} />
        </SwiperSlide>
        <SwiperSlide className={styles.desktop_swiperslide}>
          <img className={styles.desktop_slideimg} src={success5} />
        </SwiperSlide>
        <SwiperSlide className={styles.desktop_swiperslide}>
          <img className={styles.desktop_slideimg} src={success6} />
        </SwiperSlide>
      </Swiper>
      </div>

      <div className={responsive.success_mobile}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{height:"350px",width:"200px"}}
      >
        <SwiperSlide>
          <img style={{height:"100%", width:"100%",objectFit:"cover",borderRadius:"10px"}} src={success1} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"100%", width:"100%",objectFit:"cover",borderRadius:"10px"}} src={success2} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"100%", width:"100%",objectFit:"cover",borderRadius:"10px"}} src={success3} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"100%", width:"100%",objectFit:"cover",borderRadius:"10px"}} src={success4} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"100%", width:"100%",objectFit:"cover",borderRadius:"10px"}} src={success5} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height:"100%", width:"100%",objectFit:"cover",borderRadius:"10px"}} src={success6} />
        </SwiperSlide>
       
        
      </Swiper>
      </div>
    </>
  );
}
