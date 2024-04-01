import React from 'react'
import Portfoliohero from './Portfoliohero';
import Portfoliogrid from './Portfoliogrid';
import responsive from "../styles/responsive.module.css";
const Portfoliopage = () => {
  return (
    <div className={responsive.porthero_margin}>
        <Portfoliohero/>
        <Portfoliogrid/>
    </div>
  )
}

export default Portfoliopage;