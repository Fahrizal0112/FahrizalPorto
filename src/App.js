import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projectdetail from './components/Projectdetails';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<Projectdetail/>}/>
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
