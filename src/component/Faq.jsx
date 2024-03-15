import React from 'react'
import "../styles/faq.css";
const Faq = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <div style={{width:"100%",fontSize:"50px",color:"white",textAlign:"center",padding:"40px",fontWeight:"bold"}}>
        Frequently Asked Questions
      </div>
      <section style={{height:"800px"}}>
    <div className="container">
      <div className="accordion">
        <div className="accordion-item" id="question1">
          <a className="accordion-link" href="#question1">
            <div className="flex">
              <h3 style={{padding:"20px"}}>BRANDING</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p> We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this</p>
          </div>
          <hr/>
        </div>
        <div className="accordion-item" id="question2">
          <a className="accordion-link" href="#question2">
            <div className="flex">
              <h3 style={{padding:"20px"}}>UX/UI DESIGN</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr/>
        </div>
        <div className="accordion-item" id="question3">
          <a className="accordion-link" href="#question3">
            <div className="flex">
              <h3 style={{padding:"20px"}}>FRONTEND DEVELOPMENT</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr/>
        </div>
        <div className="accordion-item" id="question4">
          <a className="accordion-link" href="#question4">
            <div>
              <h3 style={{padding:"20px"}}>BACKEND DEVELOPMENT</h3>
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
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