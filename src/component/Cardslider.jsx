import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Swipecards from './Swipecards';
import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';
import fourth from '../assets/fourth.png';
import fifth from '../assets/fifth.png';
import sixth from '../assets/sixth.png';
const Cardslider = () => {
    return (
        <Swiper
            spaceBetween={-60}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Swipecards imgsrc={first} heading="Universities and Colleges" content="Unveil the campus of a college or university with a virtual tour. Invite the students to explore the place from their home’s comfort. "
                backgroundColor="#34231a"/>
            </SwiperSlide>
            <SwiperSlide>
                <Swipecards 
                imgsrc={second} heading="Real Estate" content="Redefine the way of property showcasing with an interactive virtual staging. Cover more tours to varieties at different locations."
                backgroundColor="#4e4749"/>
            </SwiperSlide>
            <SwiperSlide>
                <Swipecards 
                imgsrc={third} heading="Hotel, Tourism & Hospitality" content="Foster a digital tour of your deluxe room, dine-in area, and facilities along with interactive maps and destination, all in one place.
                "
                backgroundColor="#24313a"/>
            </SwiperSlide>
            <SwiperSlide>
                <Swipecards 
                imgsrc={fourth} heading="Marketing and Promotion:" content="Achieve a competitive edge in your market campaign by offering 3D modeling practices to enhance engagement for your clients"
                backgroundColor="#363333"/>
            </SwiperSlide>
            <SwiperSlide>
                <Swipecards 
                imgsrc={fifth} heading="Educational Course Content" content="Encourage immersive learning experiences and increase student retention via periodically updated classroom tours"
                backgroundColor="#3f4951"/>
            </SwiperSlide>
            <SwiperSlide>
                <Swipecards 
                imgsrc={sixth} heading="Infrastructure Projects" content="Enhance public engagement with private and government projects through 360-degree interaction technology."
                backgroundColor="#807b7e"/>
            </SwiperSlide>
            ...
        </Swiper>
    )
}

export default Cardslider