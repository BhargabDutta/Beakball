import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// import Servicepage_pt2 from '../src/component/Servicepage_pt2';
import Homescreen from './component/Homescreen';
import Contactpage from '../src/component/Contactpage';
import Portfoliopage from './component/Portfoliopage';
import Footer from './component/Footer';
// import NavBar from './component/Navfolder/NavBar';
import Nav from './component/Nav';
import Servicepage from './component/Servicepage';
// import Pagee from "./component/Pagee";
// import { Route, BrowserRouter , Routes} from 'react-router-dom';
import Successpt2 from './component/Successpt2';
import Successpt3 from './component/Successpt3';
import Faq from './component/Faq';
import About from './component/About';
import Privacy from './component/Privacy';
import Terms from './component/Terms';
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function App() {

  return (
    <>
    <Router>
    
    <Nav/>
      <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/service" element={<Servicepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfoliopage/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Terms" element={<Terms/>} />

      </Routes>
    </Router>
    
    <Footer/>
    </>
  )
}

export default App;