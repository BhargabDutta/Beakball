import React from 'react';
import '../styles/getstarted.css';
import { Link } from 'react-router-dom';
const Getstarted = () => {
  return (
    <div className='full'>
      <div style={{width:"100%",height:"fit-content"}}>
        <div className="head_get">Ready to get started?</div>
        <div className='subheading'>Schedule a live demo with one of our virtual tour experts</div>
        <div className='buttoncntr'>
        <Link to="/contact" className='button'>Lets Connect</Link>
        </div>
        </div>
    </div>
  )
}

export default Getstarted;