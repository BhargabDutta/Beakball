// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Testimonialcards from './Testimonialcards';
// import styles from '../styles/testimonialslider.module.css';
// import hamid from '../assets/hamid.png';
// import omkar from '../assets/omkar.png';
// import rohan from '../assets/rohan.png';
// import roshan from '../assets/roshan.png';
// import ankit from '../assets/ankit.png';

// const Testimonialslider = () => {
//   return (

//     <div className={styles.maincntr}>
//         <div className={styles.subhead}>First-Hand Opinions of Customers on<br/>Their Partnership Experience</div>
//         <div className={styles.mainhead}>Testimonials</div>

//     <Swiper
//     spaceBetween={50}
//     slidesPerView={4}
//     onSlideChange={() => console.log('slide change')}
//     onSwiper={(swiper) => console.log(swiper)}
// >
//     <SwiperSlide>
//         <Testimonialcards
//         message="“Dive into the immersive world they've crafted and experience innovation firsthand on their groundbreaking VR platform. Don't miss it out!"

//         name="OMKAR GOSWAMI"

//         designation="Analyst at HCL Technologies"
//         testi_img={omkar}/>
//     </SwiperSlide>

//     <SwiperSlide>
//         <Testimonialcards
//         message="“Used Beakball to see a College Campus, felt like i got a real tour from afar. It was actually a short and nice experience. Great work!!!”"

//         name="Roshan Kumar Yadav"

//         designation="Site Reliability Engineer@Morgan Stanley"
//         testi_img={roshan}/>
//     </SwiperSlide>

//     <SwiperSlide>
//         <Testimonialcards
//         message="“I have used geo location apps previously but giving it a sound effect and providing description to the tour was something new that I experienced.”"

//         name="ANKIT AGARWAL"

//         designation="Salesforce Developer @ Accenture"
//         testi_img={ankit}/>
//     </SwiperSlide>


//     <SwiperSlide>
//         <Testimonialcards
//         message="“The application is very interesting and interactive will give the real time interaction of the place before visiting college to match the vibe students like to have there.”"

//         name="Hamid Siddiqui"

//         designation="Citi Group | BMW Finance"
//         testi_img={hamid}/>
//     </SwiperSlide>

//     <SwiperSlide>
//         <Testimonialcards
//         message="“It is nice, i was able to understand the path and navigate towards it. I think this will change the navigation of business. It was a very nice experience with the interactives.”"

//         name="Rohan Singh"

//         designation="SSE | Accenture"
//         testi_img={rohan}/>
//     </SwiperSlide>


// </Swiper>
// </div>
//   )
// }

// export default Testimonialslider;
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Testimonialcards from './Testimonialcards';
import styles from '../styles/testimonialslider.module.css';
import hamid from '../assets/hamid.png';
import omkar from '../assets/omkar.png';
import rohan from '../assets/rohan.png';
import roshan from '../assets/roshan.png';
import ankit from '../assets/ankit.png';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import responsive from "../styles/responsive.module.css";
SwiperCore.use([]);

const Testimonialslider = () => {
  // const [swiper, setSwiper] = useState(null);
  // const sliderRef = useRef(null);
  const [swiperDesktop, setSwiperDesktop] = useState(null);
  const [swiperMobile, setSwiperMobile] = useState(null);
  const sliderDesktopRef = useRef(null);
  const sliderMobileRef = useRef(null);
  const testimonials = [
    {
      message: "“Dive into the immersive world they've crafted and experience innovation firsthand on their groundbreaking VR platform. Don't miss it out!",
      name: "OMKAR GOSWAMI",
      designation: "Analyst at HCL Technologies",
      testi_img: omkar
    },
    {
      message: "“Used Beakball to see a College Campus, felt like i got a real tour from afar. It was actually a short and nice experience. Great work!!!”",
      name: "Roshan Kumar Yadav",
      designation: "Site Reliability Engineer@Morgan Stanley",
      testi_img: roshan
    },
    {
      message: "“I have used geo location apps previously but giving it a sound effect and providing description to the tour was something new that I experienced.”",
      name: "ANKIT AGARWAL",
      designation: "Salesforce Developer @ Accenture",
      testi_img: ankit
    },
    {
      message: "“The application is very interesting and interactive will give the real time interaction of the place before visiting college to match the vibe students like to have there.”",
      name: "Hamid Siddiqui",
      designation: "Citi Group | BMW Finance",
      testi_img: hamid
    },
    {
      message: "“It is nice, i was able to understand the path and navigate towards it. I think this will change the navigation of business. It was a very nice experience with the interactives.”",
      name: "Rohan Singh",
      designation: "SSE | Accenture",
      testi_img: rohan
    }
  ];

  // useEffect(() => {
  //   const slider = sliderRef.current.swiper;
  //   setSwiper(slider);

  //   const interval = setInterval(() => {
  //     if (slider.isEnd) {
  //       slider.slideTo(0);
  //     } else {
  //       slider.slideNext();
  //     }
  //   }, 2000); // Adjust delay as needed, it's in milliseconds (5000ms = 5 seconds)

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const sliderDesktop = sliderDesktopRef.current.swiper;
    setSwiperDesktop(sliderDesktop);

    const intervalDesktop = setInterval(() => {
      if (sliderDesktop.isEnd) {
        sliderDesktop.slideTo(0);
      } else {
        sliderDesktop.slideNext();
      }
    }, 2000); // Adjust delay as needed, it's in milliseconds (2000ms = 2 seconds)

    return () => clearInterval(intervalDesktop);
  }, []);

  useEffect(() => {
    const sliderMobile = sliderMobileRef.current.swiper;
    setSwiperMobile(sliderMobile);

    const intervalMobile = setInterval(() => {
      if (sliderMobile.isEnd) {
        sliderMobile.slideTo(0);
      } else {
        sliderMobile.slideNext();
      }
    }, 2000); // Adjust delay as needed, it's in milliseconds (2000ms = 2 seconds)

    return () => clearInterval(intervalMobile);
  }, []);

  return (
    <>
      <div className={styles.maincntr}>
        <div className={styles.subhead}>First-Hand Opinions of Customers on<br />Their Partnership Experience</div>
        <div className={styles.mainhead}>Testimonials</div>
        <div className={responsive.testicard_desktop}>
          <Swiper
            // ref={sliderRef}
            ref ={sliderDesktopRef}
            spaceBetween={50}
            slidesPerView={4}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonialcards
                  message={testimonial.message}
                  name={testimonial.name}
                  designation={testimonial.designation}
                  testi_img={testimonial.testi_img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className={responsive.testicard_mobile}>
          <Swiper
            // ref={sliderRef}
            ref ={sliderMobileRef}
            spaceBetween={0}
            slidesPerView={1.1}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonialcards
                  message={testimonial.message}
                  name={testimonial.name}
                  designation={testimonial.designation}
                  testi_img={testimonial.testi_img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>



    </>
  );
}

export default Testimonialslider;
