import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/AccountPortfolio';

function App() {
  return (
    <div className="App">
     {/* <Header /> */}
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
