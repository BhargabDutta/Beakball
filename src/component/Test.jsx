import React from 'react'
import "../styles/test.css";
import snapscroll1 from '../assets/snapscroll1.png';
// import snapscroll2 from '../assets/snapscroll2.png';
// import snapscroll3 from '../assets/snapscroll3.png';
const Test = () => {
  const handleScroll = (e) => {
    const container = e.target;
    const sections = container.querySelectorAll('.section');

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        container.classList.add('snap-scroll');
      } else {
        container.classList.remove('snap-scroll');
      }
    });
  };
  return (
    <div class="parent">
      <div class="container" onScroll={handleScroll}>
        <section class="section section1">
        <div className='flexcntr'>
              <div className='box1'>
                <div className='head'>Compatible With Every Browser And Device</div>
                <div className='content'>Whether you're navigating through the lush landscapes on a tablet, exploring urban marvels on your desktop, or wandering ancient ruins on your smartphone, our solutions promise an effortlessly immersive experience.</div>
              </div>

              <div className='box2'>
                <img className='img' src={snapscroll1} />
              </div>
            </div>
        </section>
        <section class="section section2">
        <div className='flexcntr'>
              <div className='box1'>
                <div className='head'>Compatible With Every Browser And Device</div>
                <div className='content'>Whether you're navigating through the lush landscapes on a tablet, exploring urban marvels on your desktop, or wandering ancient ruins on your smartphone, our solutions promise an effortlessly immersive experience.</div>
              </div>

              <div className='box2'>
                <img className='img' src={snapscroll1} />
              </div>
            </div>
        </section>
        <section class="section section3">
        <div className='flexcntr'>
              <div className='box1'>
                <div className='head'>Compatible With Every Browser And Device</div>
                <div className='content'>Whether you're navigating through the lush landscapes on a tablet, exploring urban marvels on your desktop, or wandering ancient ruins on your smartphone, our solutions promise an effortlessly immersive experience.</div>
              </div>

              <div className='box2'>
                <img className='img' src={snapscroll1} />
              </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default Test;