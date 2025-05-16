import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar'; // Navbar ko import karo
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
      <Navbar /> {/* Navbar ko yahan include karo */}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="flex flex-col min-h-screen">
        <Footer />
      </div>
    </Router>
   
  
     
  </>
    
    
  );
};

export default App;
