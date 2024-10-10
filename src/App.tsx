import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Portfolio from './components/AccountPortfolio';
import Login from './components/Login';  // Create this component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login screen on the root path */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio screen on /portfolio */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
