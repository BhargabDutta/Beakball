import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// import Servicepage_pt2 from '../src/component/Servicepage_pt2';
import Homescreen from './component/Homescreen';
import Contactpage from '../src/component/Contactpage';
import Portfoliopage from './component/Portfoliopage';
// import Footer from './component/Footer';
import Nav from './component/Nav';
import Servicepage from './component/Servicepage';
// import Pagee from "./component/Pagee";
import { Route, BrowserRouter, Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <Nav/>
   {/* <Homescreen/> */}
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Homescreen/>}/>
    
      <Route path='/servicepage' element={<Servicepage/>}/>
      <Route path='/Contact' element={<Contactpage/>}/>
      <Route path='/Portfolio' element={<Portfoliopage/>}/>
    </Routes>
    </BrowserRouter>
    



      
     
     
    {/* <Servicepage/> */}
  
    {/* <Portfoliopage/> */}
    {/* <Contactpage/> */} 
    
    {/* <Footer/> */}
    </>
  )
}

export default App;