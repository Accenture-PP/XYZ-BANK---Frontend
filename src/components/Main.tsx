import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Ainfo from './Ainfo';
import Portfolio from'./Portfolio';
const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <Router> 
      <div>
       {/* <Header /> */}
        <header>
          <button onClick={toggleMenu} className="menu-icon">
            <FaBars size={30} color="black" />
          </button>
        </header>
        </div>
        <div className="grid-centered-container">
         <div className="content">
        {isOpen && (


          <nav className="menu">
            <ul>
           <li><Link to="/about">Portfolio</Link></li>
            <li><Link to="/contact">Account Info</Link></li>
            </ul>
        </nav>
         
        )}
        <Routes>
         <Route path="/about" element={<Portfolio portfolio={null}/>} />
         <Route path="/contact" element={<Ainfo />} />
       </Routes>
        
        </div>
      </div>
      </Router>
    );
  
  
};

export default Main;