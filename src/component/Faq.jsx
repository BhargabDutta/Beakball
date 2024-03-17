import React from 'react'
import "../styles/faq.css";
import responsive from "../styles/responsive.module.css";
const Faq = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <div className="faqhead">
        Frequently Asked Questions
      </div>
      <section className='section'>
    <div className="container">
      <div className="accordion">
        <div className="accordion-item" id="question1">
          <a className="accordion-link" href="#question1">
            <div className="flex">
              <h3 style={{padding:"20px"}}>What is Beakball?</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Beakball is a pioneering service company specializing in the creation of exceptional 3D Virtual Reality Tours and advanced 3D web development. Our expertise lies in crafting immersive virtual experiences that transcend traditional boundaries. By combining cutting-edge technology with creative innovation, we redefine the way people engage with virtual spaces. Explore the extraordinary with Beakball, where every tour is a journey into the extraordinary.</p>
          </div>
          <hr/>
        </div>
        <div className="accordion-item" id="question2">
          <a className="accordion-link" href="#question2">
            <div className="flex">
              <h3 style={{padding:"20px"}}>How does Beakball's Virtual Reality platform work?</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Beakball's Virtual Reality platform operates by leveraging real-life images to construct captivating virtual worlds. Our in-house technology seamlessly transforms ordinary images into extraordinary virtual reality experiences. This unique process allows us to create immersive tours that transcend the boundaries of traditional visual storytelling. Experience the magic of reality transformed with Beakball's cutting-edge Virtual Reality platform.</p>
          </div>
          <hr/>
        </div>
        <div className="accordion-item" id="question3">
          <a className="accordion-link" href="#question3">
            <div className="flex">
              <h3 style={{padding:"20px"}}>What services does Beakball offer?</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>3D Virtual Reality Tours: Experience the next level of virtual reality with Beakball's diverse tour options. These tours allow users to navigate and interact with virtual spaces as if they were physically present. The platform utilizes cutting-edge VR technology to enhance the user experience.</p>
          </div>
          <hr/>
        </div>
        <div className="accordion-item" id="question4">
          <a className="accordion-link" href="#question4">
            <div>
              <h3 style={{padding:"20px"}}>What industries can benefit from Beakball's 3D Virtual Tours?</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Beakball's 3D Virtual Tours cater to a wide range of industries, providing immersive experiences that elevate engagement and interaction. Industries that can benefit include:
        <ul>
            <li>Education: Schools and colleges can revolutionize learning through interactive virtual reality tours.</li>
            <li>Real Estate: Transform property showcasing with immersive virtual reality experiences.</li>
            <li>Hospitality and Tourism: Elevate the guest experience by allowing remote exploration of hotels and tourist destinations.</li>
            <li>Marketing: Create visually striking and memorable experiences with 3D Virtual Reality Marketing Landing Pages.</li>
            <li>Gaming: Immerse gamers in captivating experiences with virtual reality landing pages that showcase games innovatively.</li>
            <li>Education Technology: Make learning engaging and interactive with virtual reality course content.</li>
        </ul></p>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Faq