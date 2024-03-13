import React from 'react'
import styles from '../styles/Cards.module.css'
import Logo from '../assets/Logo.webp'
const Cards = () => {
  return (
    <div className={styles.card}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">3D VR Website Development for Schools and Colleges</h5>
        <p className="card-text">Revolutionize education with interactive virtual reality tours designed for schools and colleges.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">3D VR for Real Estate</h5>
        <p className="card-text">Transform property showcasing with immersive virtual reality experiences that bring real estate to life.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hotel and Tourism 3D Virtual Tours</h5>
        <p className="card-text">Elevate the hospitality experience with virtual tours that allow guests to explore hotels and tourist destinations remotely.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">3D Virtual Reality Marketing Landing Pages</h5>
        <p className="card-text">Transform your marketing approach with virtual reality landing pages, creating a visually striking and memorable experience for your audience.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">3D Virtual Reality Games Landing Pages</h5>
        <p className="card-text">Immerse gamers in captivating experiences with virtual reality landing pages that showcase games in an innovative way.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">3D Educational Course Content</h5>
        <p className="card-text">Make learning engaging and interactive with virtual reality course content that captivates students.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Logo} className="card-img-top" alt="..." style={{width:"auto", height:"auto"}}/>
      <div className="card-body">
        <h5 className="card-title">3D VR Infrastructure Projects</h5>
        <p className="card-text">Enhance public engagement with government projects through virtual reality, making information accessible and engaging.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards