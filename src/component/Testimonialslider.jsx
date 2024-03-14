import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Testimonialcards from './Testimonialcards';
import styles from '../styles/testimonialslider.module.css';
const Testimonialslider = () => {
  return (
    
    <div className={styles.maincntr}>
        <div className={styles.subhead}>First-Hand Opinions of Customers on<br/>Their Partnership Experience</div>
        <div className={styles.mainhead}>Testimonials</div>

    <Swiper
    spaceBetween={370}
    slidesPerView={4.5}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    
>
    <SwiperSlide>
        <Testimonialcards
        message="“Dive into the immersive world they've crafted and experience innovation firsthand on their groundbreaking VR platform. Don't miss it out!"
        
        name="OMKAR GOSWAMI"
        
        designation="Analyst at HCL Technologies"/>
    </SwiperSlide>

    <SwiperSlide>
        <Testimonialcards
        message="“Used Beakball to see a College Campus, felt like i got a real tour from afar. It was actually a short and nice experience. Great work!!!”"
        
        name="Roshan Kumar Yadav"
        
        designation="Site Reliability Engineer@Morgan Stanley"/>
    </SwiperSlide>

    <SwiperSlide>
        <Testimonialcards
        message="“I have used geo location apps previously but giving it a sound effect and providing description to the tour was something new that I experienced.”"
        
        name="ANKIT AGARWAL"
        
        designation="Salesforce Developer @ Accenture"/>
    </SwiperSlide>


    <SwiperSlide>
        <Testimonialcards
        message="“The application is very interesting and interactive will give the real time interaction of the place before visiting college to match the vibe students like to have there.”"
        
        name="Hamid Siddiqui"
        
        designation="Citi Group | BMW Finance"/>
    </SwiperSlide>

    <SwiperSlide>
        <Testimonialcards
        message="“It is nice, i was able to understand the path and navigate towards it. I think this will change the navigation of business. It was a very nice experience with the interactives.”"
        
        name="Rohan Singh"
        
        designation="SSE | Accenture"/>
    </SwiperSlide>


</Swiper>
</div>
  )
}

export default Testimonialslider;