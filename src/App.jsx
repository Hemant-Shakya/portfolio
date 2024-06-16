import React, { useState } from "react";
import './App.css';
import img from './images/logo.png'
import Home from './Home'; 
import About from './About';
import Services from './Services';
import Contact from "./Contact";
import { RxHamburgerMenu } from "react-icons/rx";

import {BrowserRouter, Routes, Route, Link, HashRouter} from 'react-router-dom';
import Smi from "./Smi";
import Experience from "./Experience";



function App() 
{
  const [active, setactive] = useState(false);  // create state
  return(
      <>
      <div>
      <div>
        <img className='img' src={img} />
        {/* set state */}
        <div className= "burger-menu" onClick={()=>setactive(!active)}>  
        {/* set icon */}
        {active ? <RxHamburgerMenu /> : 'X'}
        </div>
       
        <HashRouter>
        {/* //set which class should be call when active state is true */}
          <div className= {active ? 'Menu':'Menu_active'}>
          <Link to = "/" className="nav"> Home</Link>
          <Link to = "/about" className="nav"> About</Link>
          <Link to = "/experience" className="nav"> Experience</Link>
          <Link to = "/services" className="nav"> Services</Link>
          <Link to = "/contact" className="nav"> Contact Us</Link>
          </div>
          <Routes>
            <Route path="/" Component= {Home}/>
            <Route path="/About" Component= {About}/>
            <Route path="/experience" Component= {Experience}/>
            <Route path="/Services" Component= {Services}/>
            <Route path="/contact" Component= {Contact}/>

          </Routes>
        </HashRouter>  
      </div>
      <div>
        <Smi/>
        
      </div>
      </div>
      </>
      );
}
export default App
