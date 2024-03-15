import React from 'react'
// import Logo from "../assets/Logo.webp";
import success1 from "../assets/success1.png";
import success2 from "../assets/success2.png";
import success3 from "../assets/success3.png";
import '../styles/successpt2.css';
const Successpt2 = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{marginBottom:"0px"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className='image-container'>
                        <img src={success1} className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption d-none d-md-block" style={{color:"white"}}>
                            <h5 style={{fontSize:"60px",color:"white"}}>BARAK VALLEY ENGINEERING COLLEGE</h5>
                            <p style={{color:"white",fontSize:"20px"}}>Campus Tour with Voice Assistance guide</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <div className='image-container'>
                        <img src={success2} className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{fontSize:"60px",color:"white"}}>Hotel Building Sample</h5>
                            <p style={{color:"white",fontSize:"20px"}}>Hotel services and facilities</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='image-container'>
                        <img src={success3} className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{fontSize:"60px",color:"white"}}>Virtual Theatre for Movie Premier</h5>
                            <p style={{color:"white",fontSize:"20px"}}>Virtual Movie trailers and ticketing system</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{backgroundColor:"white",padding:"0px"}}> 
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"  style={{backgroundColor:"white",padding:"0px" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Successpt2;